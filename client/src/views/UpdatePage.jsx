import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Display from '../components/Display'
import Form from '../components/Form'
import Navbar from '../components/Navbar'



const UpdatePage = () => {
    const { id } = useParams()
    const [pirate, setPirate] = useState({})

    useEffect(() =>{
        axios.get('http://localhost:8000/api/pirates/'+id)
            .then(res => {
                setPirate(res.data)
            })
            .catch(err=>console.log(err))
    },[id])

    return (
        <div>
            <Navbar message='Deep Sea Davy' home={false} />
            {pirate.name && <Display pirate={pirate} method='put' path={'pirates/'+id}/> }
        </div>
    )
}

export default UpdatePage