
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid'

import './index.css'

const AdminLogin = (props) => {
  const navigate = useNavigate();
  const [userName, setuserName] = useState('')
  const [userPass, setPassword] = useState('')
  const [errorMessage, setErrMessage] = useState('')
  const [loading, setLoading] = useState(false)

  const submitForm = async (e) => {
    e.preventDefault()
    const adminApi = 'https://hyper-back.onrender.com/admin/login'
    const userDetails = {
      username: userName,
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
    const response = await fetch(adminApi, options)
    const data = await response.json()
    setLoading(false)
    console.log(data,'o')
    if (response.ok===true) {
      // console.log(data, 'dat')
      localStorage.setItem('adminToken',data.jwtToken)
      navigate("/")
      localStorage.setItem("status", false,)
      setErrMessage('')
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
            <h2 className='loginPage-title'>Admin Login</h2>
            <label htmlFor='user'>UserName</label>
            <div className='input-card'>
              <input id='user' type="text" value={userName} placeholder='userName' onChange={(e) => setuserName(e.target.value)} />
            </div>&nbsp; <br /> 
            <label htmlFor='Mailpassword'>password</label>
            <div className='input-card'>
              <input id='Mailpassword' type="password" value={userPass} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            </div>&nbsp; <br /> 
            <div className='log-btn-c'>
              <button type='submit' className='login-btn'>{loading ? 'Loading...' : 'Login'}</button>
            </div>
            <p className='error-message'>{errorMessage}</p>
            <Link to="/user">
              <p className='links' >Not a Admin? Login as a User</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AdminLogin
