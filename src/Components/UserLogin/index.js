
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import './index.css'

const UserLogin = (props) => {
    const { history } = props
    const [userName, setUserName] = useState('')
    const [userPass, setPassword] = useState('')
    const [errorMessage, setErrMessage] = useState('')
    const navigate = useNavigate();

    const submitForm = async (e) => {

        e.preventDefault()

        const userApi = 'https://hyper-back.onrender.com/user/login'
        const userDetails = {
            username: userName,
            password: userPass,
        }
        const options = {
            method: 'POST',
            body: JSON.stringify(userDetails),
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        }
        const response = await fetch(userApi, options)
        const data = await response.json()
        console.log(data, 'dat')
        if (data.jwtToken.length>0) {
            setErrMessage('')
            localStorage.setItem("status", true)
            localStorage.setItem("id", data.id)
            navigate("/")
        }
        else {
            setErrMessage(data.msg)
        }
    }
    const getId = localStorage.getItem("id")
    // if (getId !== null) {
    //     return <Redirect to="/" />
    // }
    return (
        <div className='login-container'>
            <div className='choose-master-student'>
                <div className='Page-container'>
                    <form autoComplete="off" onSubmit={submitForm}>
                        <h2 className='loginPage-title'>User Login</h2>
                        <label htmlFor='email'>Email</label>
                        <div className='input-card'>
                            <input id='email' type="text" value={userName} placeholder='Email' onChange={(e) => setUserName(e.target.value)} />
                            <p className='icons' ></p>
                        </div>&nbsp; <br /> <br />
                        <label htmlFor='Mailpassword'>password</label>
                        <div className='input-card'>
                            <input id='Mailpassword' type="password" value={userPass} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                            <p className='icons'></p>
                        </div>&nbsp; <br /> <br />
                        <button type='submit' className='login-btn'>Login</button>
                        <p className='error-message'>{errorMessage}</p>
                        <Link to={`/signup`} >
                            <p>Don't have Account </p>
                        </Link>
                        <Link to="/admin">
                            <p>Not a User? Login as a Admin</p>
                        </Link>
                    </form>
                </div>
            </div>

        </div>
    )
}
export default UserLogin
