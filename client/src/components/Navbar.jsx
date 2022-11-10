import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

const Navbar = (props) => {
    const { home, message } = props
    return (
        <div>            
            <h1>{message}</h1>
            <Button variant="text">
                {home && <Link to={'/pirate/new'}>Add Pirate</Link>}
                {!home && <Link to={'/pirates'}>Crew Board</Link>}
            </Button>
        </div>
    )
}

export default Navbar