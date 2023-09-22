import React from 'react'
import Layout from '../Components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import '../Pages/Dashboard.css'

function Dashboard() {
    const user=useSelector(selectUser)
    return (
        <>
            <Layout />
            <div className='main-wrapper'>
                <div className='welcome-container'>
                    <h1> Welcome <span className=' username-color'>{user?.email} </span> ! </h1>
                </div>

            </div>
        </>
    )
}

export default Dashboard;