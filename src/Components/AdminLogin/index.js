
import { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'

import './index.css'

const AdminLogin = (props) => {
  const { history } = props
  const navigate = useNavigate();
  const [userName, setuserName] = useState('')
  const [userPass, setPassword] = useState('')
  const [errorMessage, setErrMessage] = useState('')

  const submitForm = async (e) => {
    console.log('ok')
    e.preventDefault()
    const adminApi = 'https://hyper-back.onrender.com/admin/login'

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
    const response = await fetch(adminApi, options)
    const data = await response.json()

    console.log(data,'o')
    if (data.jwtToken.length>0) {
      console.log(data, 'dat')
      setErrMessage('')
      localStorage.setItem("status", false,)
      localStorage.setItem("id", data.id)
      navigate("/")
    }
    else {
      setErrMessage(data.msg)
    }

  }

  const getId = localStorage.getItem("id")
  // if (getId !== null) {
  //   return <Redirect to="/" />
  // }
  return (
    <div className='login-container'>
      <div className='choose-master-student'>
        <div className='Page-container'>
          <form autoComplete="off" onSubmit={submitForm}>
            <h2 className='loginPage-title'>Admin Login</h2>
            <label htmlFor='email'>Email</label>
            <div className='input-card'>
              <input id='email' type="text" value={userName} placeholder='Email' onChange={(e) => setuserName(e.target.value)} />
              <p className='icons' ></p>
            </div>&nbsp; <br /> <br />
            <label htmlFor='Mailpassword'>password</label>
            <div className='input-card'>
              <input id='Mailpassword' type="password" value={userPass} placeholder='password' onChange={(e) => setPassword(e.target.value)} />
              <p className='icons'></p>
            </div>&nbsp; <br /> <br />
            <button type='submit' className='login-btn'>Login</button>
            <p className='error-message'>{errorMessage}</p>
            <Link to="/user">
              <p >Not a Admin? Login as a User</p>
            </Link>
          </form>
        </div>
      </div>
    </div>
  )
}
export default AdminLogin
