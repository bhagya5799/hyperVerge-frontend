import React from 'react'
import { useState, useEffect } from 'react'
import './index.css'


const userBasic = [
    {
        name: "sai",
        phone: '9856789423',
        address: "hyderabad",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlQpPioCY8pn1MmoL4w2K9baeg2Ubr8RxEEdtWX1u&s"
    },
    {
        name: "bhagya",
        phone: '9856789423',
        address: "hyderabad",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbvAVeZbWUdvvqiQvcqlOWv33cj3gWnq_0PY_cnP8djkvel4sPrqGXCFIKOC_eQmcfq8&usqp=CAU"
    },
    {
        name: "karuna",
        phone: '8156789423',
        address: "banagalore",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYlQpPioCY8pn1MmoL4w2K9baeg2Ubr8RxEEdtWX1u&s"
    },
    {
        name: "bhagya",
        phone: '7856789423',
        address: "channi",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUbvAVeZbWUdvvqiQvcqlOWv33cj3gWnq_0PY_cnP8djkvel4sPrqGXCFIKOC_eQmcfq8&usqp=CAU"
    },
    {
        name: "vinitha",
        phone: '7856789423',
        address: "channi",
        img: "https://media.istockphoto.com/id/1193994027/photo/cute-boy-outdoors.jpg?s=612x612&w=0&k=20&c=9t0VR6BCwSZk5ciPSuMzrN0gpfDG2lBoCtHsvoBN0vA="
    },
]
const UserDashBoard = () => {
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
    return (
        <div className=''>
            <nav></nav>
            <div className='details-card'>
            {userBasic.map((each, index) => (
                <div className='container'>
                    <img src={each.img} alt={each.name} height={200} width={200} />
                    <div >
                        <h4>Name: {each.name}</h4>
                        <h5>Phone Number: {each.phone}</h5>
                        <h5>Address: {each.address}</h5>
                    </div>
                </div>

            ))}
            </div>
        </div>
    )
}

export default UserDashBoard