import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import UserCard from '../UserCard'



const Home = () => {
    const [userData, setuserData] = useState([])
    useEffect(() => {
        getUserData()
        // getOneData()
    }, [])
    const getUserData = async () => {
        const jwtToken = localStorage.getItem('adminToken');
        const url = 'https://hyper-back.onrender.com/user/dashboard'
        const options = {
            method: "GET",
            headers: {
                Authorization: `Bearer ${jwtToken}`
            },
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log(data)
        if (response.ok === true) {
            setuserData(data.user)
        }
    }



    console.log(userData)
    return (
        <div className='home'>
            <nav>
                <Link to='/user'>
                    {/* <button className='user-btn'>User Login</button> */}
                </Link>
                <Link to='/Admin'>
                    <button className='user-btn'>Admin Login</button>
                </Link>
            </nav>

            <div className='child-component'>
                <h1 className='admin-dashboard'>Admin Dashboard</h1>
                {/* <table>
                    <thead>
                        <th>User Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>PhoneNumber</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {userData.map((each, index) => (
                            <tr key={each.id}>
                                <td>{each.username}</td>
                                <td>{each.email}</td>
                                <td>{each.address}</td>
                                <td>{each.phonenumber}</td>
                                <td>
                                    <button
                                        className="delete-btn"
                                      onClick={() => deleteUser(each.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> */}
                <div className='child-component'>
                    <UserCard userData={userData} setUserData={setuserData} />
                </div>
            </div>

        </div>
    )
}

export default Home