import React from 'react';
import axios from 'axios';
import './index.css'

const UserCard = ({ userData, setUserData }) => {
    const deleteUser = async (id) => {
        console.log(id);
        try {
            await axios.delete(`https://hyper-back.onrender.com/delete-user/${id}`);
            // Remove the deleted user from the userData state
            setUserData(userData.filter(user => user.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className='usercard-container'>
            {userData.map((each, index) => (
                <div className='user-card' key={index}>
                    <p><span className='head'>Name:</span> &nbsp;{each.username}</p>
                    <p><span className='head'>Email:</span>&nbsp; {each.email}</p>
                    <p><span className='head'>Address:</span>&nbsp; {each.address}</p>
                    <p><span className='head'>PhoneNumber:</span>&nbsp;{each.phonenumber}</p>
                    <p>
                        <button
                            className="delete-btn"
                            onClick={() => deleteUser(each.id)}
                        >
                            Delete
                        </button>
                    </p>
                </div>
            ))}
        </div>
    );
}

export default UserCard;
