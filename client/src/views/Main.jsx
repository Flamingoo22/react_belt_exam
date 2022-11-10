import React, { useState, useEffect } from 'react'
import axios from 'axios';
import DataTable from '../components/DataTable';
import Navbar from '../components/Navbar';
import Container from '@mui/material/Container'

const Main = (props) => {
    const [ pirates, setPirates ] = useState([])

    const deleteHandler = (id) =>{
        axios.delete('http://localhost:8000/api/pirates/'+ id)
            .then(res=> {
                setPirates(pirates.filter( author => author._id !== res.data._id))
            })
            .catch(err => console.log(err))
    }

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                setPirates(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {/* {JSON.stringify(pirates)} */}
            <Navbar message='Pirate Crew: ' home={true} />
            <Container maxWidth="md">
                {pirates[0] && <DataTable pirates={pirates} deleteHandler={deleteHandler} />}
            </Container>
        </div>
    )
}

export default Main