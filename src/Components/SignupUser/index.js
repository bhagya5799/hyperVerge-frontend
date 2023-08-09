import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './index.css'
import { TailSpin } from 'react-loader-spinner'
import {  useNavigate } from 'react-router-dom'

const SignupUser = (props) => {
    const [username, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [address, setAddress] = useState('')
    const [phone, setPhone] = useState('')
    // const [pic, setPic] = useState(null)/
    const [errorMessage, setErrMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    // const { match } = props
    // const { params } = match
    // const { status } = params


    const submitForm = async (event) => {
        event.preventDefault();
        const url = 'https://hyper-back.onrender.com/user/register';
        const userDetails = {
            username: username,
            email: email,
            password: password,
            address: address,
            phonenumber: phone,
            id: uuidv4(),
        };
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        };
        setLoading(true)
        const response = await fetch(url, options)
        const responseData = await response.json()
        console.log(responseData.token, 'ik')
        setLoading(false)
        if (response.ok === true) {
            console.log(responseData, 'ik')
            localStorage.setItem('jwtToken', responseData.token);
            console.log(responseData, 'p')
            navigate('/user')
            setErrMessage('')
        }
        else {
            console.error(responseData, 'po');
            setErrMessage('Internal server error')
            setToggle(true)
        }
        console.log(errorMessage)
    };

    return (
        <div className='Register-form-container'>
            <form autoComplete="off" onSubmit={submitForm} className="r-form">
                <h3 className='loginPage-title'>Register Form</h3>
                <label htmlFor='username'>UserName</label>
                <div className='input-cards'>
                    <input id='username' type="text" value={username} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                   
                </div>&nbsp; <br /> 
                <label htmlFor='email'>Email</label>
                <div className='input-cards'>
                    <input id='email' type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                  
                </div>&nbsp; <br /> 
                <label htmlFor='Mailpassword'>password</label>
                <div className='input-cards'>
                    <input id='Mailpassword' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    
                </div>&nbsp; <br />
                <label htmlFor='address'>Address</label>
                <div className='input-cards'>
                    <input id='address' type="text" value={address} placeholder='address' onChange={(e) => setAddress(e.target.value)} />
                   
                </div>&nbsp; <br /> 
                <label htmlFor='phone'>phonenumber</label>
                <div className='input-cards'>
                    <input id='phone' type="text" value={phone} placeholder='phonenumber' onChange={(e) => setPhone(e.target.value)} />
                    
                </div>&nbsp; <br />
                {/* <label htmlFor='pic'>Profile</label>
                <div className='input-cards'>
                    <input id='pic' type="file" value={pic} placeholder='galary' onChange={handleImageChange} />
                    <p className='icons'></p>
                </div>&nbsp; <br /> <br /> */}
                <button type='submit' className='login-btn'>{loading ? (<TailSpin
                    height="20"
                    width="20"
                    radius="9"
                    color="green"
                    ariaLabel="ThreeDots"
                    wrapperStyle
                    wrapperClass
                />) : 'Register'}</button>
                {toggle && <p className='error-message'>{errorMessage}</p>}
            </form>
        </div>
    )
}
export default SignupUser 