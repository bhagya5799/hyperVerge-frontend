import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import './index.css'
import { Link, useNavigate } from 'react-router-dom'

const SignupUser = (props) => {
    
    const [username, setName] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage, setErrMessage] = useState('')
    const [toggle, setToggle] = useState(false)
    const navigate=useNavigate()
    // const { match } = props
    // const { params } = match
    // const { status } = params


    const submitForm = async (event) => {
        event.preventDefault();

        const url = 'https://hyper-back.onrender.com/user/register';
        const userDetails = {
            username: username,
            password: password,
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
        try {
            const response = await fetch(url, options);
            if (response.ok) {
                // Registration success
                console.log('User registered successfully!');
                navigate('/userDashboard')
            } else {
                // Registration failed
                const errorData = await response.json();
                setErrMessage(errorData.error || 'User Not Registered');
                setToggle(true);
            }
        } catch (error) {
            console.error('Error during registration:', error);
            setErrMessage('An error occurred during registration.');
            setToggle(true);
        }
    };


 
    return (
        <div className='Register-form-container'>
            
            <form autoComplete="off" onSubmit={submitForm} className="r-form">
                <h4 className='loginPage-title'>Register Form</h4>
                <label htmlFor='email'>UserName</label>
                <div className='input-cards'>
                    <input id='email' type="text" value={username} placeholder='Name' onChange={(e) => setName(e.target.value)} />
                    <p className='icons' ></p>
                </div>&nbsp; <br /> <br />
              
                <label htmlFor='Mailpassword'>password</label>
                <div className='input-cards'>
                    <input id='Mailpassword' type="password" value={password} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                    <p className='icons'></p>
                </div>&nbsp; <br /> <br />
                <button type='submit' className='login-btn'>Register</button>
                {toggle && <p className='error-message'>{errorMessage}</p>}
                
            </form>
        </div>
    )
}
export default SignupUser