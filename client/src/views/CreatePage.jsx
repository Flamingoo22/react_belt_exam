import React, {useState, useEffect} from 'react'
import axios from 'axios';
import Form from '../components/Form';
import Navbar from '../components/Navbar';
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'


const CreatePage = (props) => {
    const [ pirates, setPirates ] = useState([])

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pirates')
            .then(res => {
                setPirates(res.data)
            })
            .catch(err => console.log(err))
    }, [])


    return (
        <div>
            <Navbar message='Add a new author: ' home={false} />
            <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                    {<Form 
                    method='post'
                    path='pirates'
                    name=''
                    />}
                </Paper>
            </Grid>
        </div>
    )
}

export default CreatePage