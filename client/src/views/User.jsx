import React from 'react'
import Register from '../components/Register'
import Login from '../components/Login'

const User = () => {
    return (
        <div className='row'>
            <div  className='col'>
                <Register/>
            </div>
            <div className='col'>
                <Login />
            </div>
        </div>
    )
}

export default User