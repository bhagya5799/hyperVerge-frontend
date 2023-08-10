
import React, { useState, useEffect } from 'react';
import { FaUser, FaBackward } from 'react-icons/fa'
import './index.css'
import axios from 'axios'
import { Link } from 'react-router-dom';

const UserDashBoard = () => {
    const [userData, setUserData] = useState([]);
    const [updateUserName, setUpdateUserName] = useState('')
    const [updateEmail, setUpdateEmail] = useState('')
    const [updateAddress, setUpdateAddress] = useState('')
    const [updatePhone, setUpdatePhone] = useState('')
    const [updateErrorMsz, setUpdateErrorMsz] = useState('');
    const [toggle, setToggle] = useState('')
    // Retrieve JWT token from localStorage
    const Id = localStorage.getItem('id');
    console.log(Id)
    // Fetch user data when the component mounts
    useEffect(() => {
        getUserData()

    },[])
    const getUserData = async () => {
        try {
            const response = await fetch(`https://hyper-back.onrender.com/getOne/${Id}`);
            const data = await response.json();
            if (response.ok === true) {
                setUserData(data);
            }
        } catch (error) {
            console.error(error);
        }
    };
    // Render user data in a card format

    const submitUpdateForm = async (event) => {
        event.preventDefault();

        try {
            const updatedData = {
                username: updateUserName,
                email: updateEmail,
                address: updateAddress,
                phonenumber: updatePhone
            };

            await axios.put(`https://hyper-back.onrender.com/updateUser/${updateUserName}`, updatedData);
            getUserData(); // Refresh user data after update
            setUpdateErrorMsz('');
            setUpdateUserName('')
            setUpdateEmail('')
            setUpdateAddress('')
            setUpdatePhone('')
        } catch (error) {
            console.error(error);
            setUpdateErrorMsz(error.response.data.error);
        }
    };
    const updateBtn = () => {
        if (toggle) {
            setToggle(false)
        }
        else {
            setToggle(true)
        }

    }
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
                            <button className='edit-btn' onClick={updateBtn}>Edit</button>
                        </div>
                    </div>
                ))}
            </div>
            {toggle && <form onSubmit={submitUpdateForm}>
                <table>
                    <thead>
                        <tr>
                            <th className='th-title'>Update Name
                                <button type="submit" className='updateBtn' >Update</button>
                            </th>
                            <th>Updated Email</th>
                            <th>Updated Address</th>
                            <th>Update PhoneNumber</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <input
                                    className="td-input"
                                    type="text"
                                    value={updateUserName}
                                    placeholder="Enter userName"
                                    onChange={(e) => setUpdateUserName(e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    className="td-input"
                                    type="text"
                                    value={updateEmail}
                                    placeholder='UpdateEmail'
                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                />
                            </td>
                            <td>
                                <input
                                    className="td-input"
                                    type="text"
                                    value={updateAddress}
                                    placeholder="Update address"
                                    onChange={(e) => setUpdateAddress(e.target.value)}
                                />
                            </td>

                            <td>
                                <input
                                    className="td-input"
                                    type="text"
                                    value={updatePhone}
                                    placeholder="Update phone"
                                    onChange={(e) => setUpdatePhone(e.target.value)}
                                />
                            </td>


                        </tr>
                    </tbody>
                    {updateErrorMsz && <span className="error-message">{updateErrorMsz}</span>}
                </table>
            </form>}
            {/* {toggle &&
                <form onSubmit={submitUpdateForm}>
                    <div className="vertical-form">
                        <div className='card-2'>
                            <div className='lable-input'>
                                <label>Name:</label>
                                <input
                                    type="text"
                                    value={updateUserName}
                                    placeholder="Enter userName"
                                    onChange={(e) => setUpdateUserName(e.target.value)}
                                />
                            </div>
                            <div className='lable-input'>
                                <label>Email:</label>
                                <input
                                    type="text"
                                    value={updateEmail}
                                    placeholder='UpdateEmail'
                                    onChange={(e) => setUpdateEmail(e.target.value)}
                                />
                            </div>
                            <div className='lable-input'>
                                <label>Address:</label>
                                <input
                                    type="text"
                                    value={updateAddress}
                                    placeholder="Update address"
                                    onChange={(e) => setUpdateAddress(e.target.value)}
                                />
                            </div>
                            <div className='lable-input'>
                                <label>Phone Number:</label>
                                <input
                                    type="text"
                                    value={updatePhone}
                                    placeholder="Update phone"
                                    onChange={(e) => setUpdatePhone(e.target.value)}
                                />

                                <button type="submit" className='updateBtn'>Update</button>
                                {updateErrorMsz && <span className="error-message">{updateErrorMsz}</span>}
                            </div>

                        </div>
                      
                        
                     
                    </div>
                </form>
            } */}
        </div>
    );
}

export default UserDashBoard
