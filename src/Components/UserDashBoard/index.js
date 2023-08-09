
import React, { useState, useEffect } from 'react';
import { FaUser, FaBackward } from 'react-icons/fa'
import './index.css'
import { Link } from 'react-router-dom';

const UserDashBoard = () => {
    // State to hold user data
    const [userData, setUserData] = useState([]);
    // Retrieve JWT token from localStorage
    const Id = localStorage.getItem('id');
    // Fetch user data when the component mounts
    useEffect(() => {
        getUserData()
        
    },[])
    const getUserData = async () => {

        const url = `https://hyper-back.onrender.com/getOne/${Id}`
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log('home', data)
        if (response.ok === true) {
            setUserData(data)
        }
    }
    console.log(userData, 'uu')
    // Render user data in a card format
    return (
        <div className='user-dashboard'>
            <nav className='nav-user'>
                <Link to='/user'>
                    <button className='back-btn'>Back <FaBackward /></button>
                </Link>
            </nav>
            <h1 className='user-title'>User Dashboard</h1>
            <div className='details-card'>
              
                {userData.map((each, index) => (
                    <div className='container' key={index}>
                        <i><FaUser className='user-icon' /></i>
                        <div>
                            <h4>Name: <span className='user-value'>{each.username}</span></h4>
                            <h4>Email: <span className='user-value'>{each.email}</span></h4>
                            <h4>Address: <span className='user-value'>{each.address}</span></h4>
                            <h4>phonenumber: <span className='user-value'>{each.phonenumber}</span></h4>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default UserDashBoard
