import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {TailSpin } from 'react-loader-spinner'
import { v4 as uuidv4 } from 'uuid'
import './index.css'

const UserLogin = (props) => {
    const [email, setEmail] = useState('')
    const [userPass, setPassword] = useState('')
    const [errorMessage, setErrMessage] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();

    const submitForm = async (e) => {
        e.preventDefault()
        const userApi = 'https://hyper-back.onrender.com/user/login'
        const userDetails = {
            email: email,
            password: userPass,
            id: uuidv4,
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        }
        setLoading(true)
        const response = await fetch(userApi, options)
        const data = await response.json()
        console.log(data.user.id, 'dat')
        setLoading(false)
        if (response.ok === true) {
            navigate("/userDashboard")
            localStorage.setItem("status", true)
            localStorage.setItem("id", data.user.id)
            setErrMessage('')
            localStorage.setItem('jwtToken', data.jwtToken)
        }
        else {
            setErrMessage(data.msg)
        }
    }


    return (
        <div className='login-container'>
            <div className='choose-master-student'>
                <div className='Page-container'>
                    <form autoComplete="off" onSubmit={submitForm}>
                        <h2 className='loginPage-title'>User Login</h2>
                        <label htmlFor='email'>Email</label>
                        <div className='input-card'>
                            <input id='email' type="text" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                        </div>&nbsp; <br />
                        <label htmlFor='Mailpassword'>password</label>
                        <div className='input-card'>
                            <input id='Mailpassword' type="password" value={userPass} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                        </div>&nbsp; <br />
                        <div className='btn-continer'>
                            <button type='submit' className='login-btn'>{loading ? (<TailSpin
                                height="20"
                                width="20"
                                radius="9"
                                color="green"
                                ariaLabel="ThreeDots"
                                wrapperStyle
                                wrapperClass
                            />) : 'Login'}</button>
                        </div>
                        {errorMessage && <p className='error-message'>{errorMessage}</p>}
                        <Link to={`/signup`} >
                            <p className='link'>Don't have Account </p>
                        </Link>
                        <Link to="/admin">
                            <p className='link'>Not a User? Login as a Admin</p>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default UserLogin
