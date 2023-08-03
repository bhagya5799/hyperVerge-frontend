import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import './index.css'


const Home = () => {
    const [userData, setuserData] = useState([])
    useEffect(() => {
        getUserData()
    }, [])
    const getUserData = async () => {
        const url = 'https://hyper-back.onrender.com/user/dashboard'
        const options = {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                accept: 'application/json',
            },
        }

        const response = await fetch(url, options)
        const data = await response.json()
        setuserData(data)
        console.log(userData)
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`https://hyper-back.onrender.com/${id}`);
            // Refresh the invoice data after deletion
            getUserData();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div className='home'>
            <nav>
                <Link to='/user'>
                    <button className='user-btn'>User Login</button>
                </Link>
                <Link to='/Admin'>
                    <button className='user-btn'>Admin Login</button>
                </Link>
            </nav>

            <div>
                <table>
                    <thead>
                        <th>User Name</th>
                        <th>Delete</th>
                    </thead>
                    <tbody>
                        {userData.map((each, index) => (
                            <tr key={each.id}>
                                <td>{each.username}</td>
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
                </table>
                
            </div>

        </div>
    )
}

export default Home