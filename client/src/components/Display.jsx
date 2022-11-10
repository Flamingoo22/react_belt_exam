import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import { FormControlLabel, Stack, Switch } from '@mui/material';
import axios from 'axios';

const Display = (props) => {
    const nav = useNavigate();
    const { pirate, path, method } = props
    const [ newPirate, setNewPirate ] = useState(pirate)

    const [ errors, setErrors ] = useState([]);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios[method]('http://localhost:8000/api/'+ path, newPirate)
            .then(res=>{
                console.log(res.data);
                nav('/pirates')
            })
            .catch(err=> {
                const errResponse = err.response.data.errors;
                const errArray = [];
                for (const key of Object.keys(errResponse)){
                    errArray.push(errResponse[key].message)
                };
                setErrors(errArray);
        })
    }

    const updatePirate = (e) =>{
        setNewPirate({...newPirate, [e.target.name] : e.target.checked})
        // onSubmitHandler(e);
    }

    return (
        <Container maxWidth="sm">
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <Stack spacing={2}>

                <TextField 
                    label="Pirate Name" 
                    variant="outlined" 
                    value={pirate.name} 
                    name='name'
                    InputProps={{
                        readOnly: true,
                    }} />       
                <TextField 
                    label="Image Url" 
                    variant="outlined" 
                    value={pirate.imageUrl} 
                    name='imageUrl'
                    InputProps={{
                        readOnly: true,
                    }} />       
                <TextField 
                    label="# of Treausre Chests" 
                    variant="outlined" 
                    type="number"
                    value={pirate.numChest} 
                    name='numChest' 
                    InputProps={{
                        readOnly: true,
                    }} />       
                <TextField 
                    label="Pirate Catch Phrase" 
                    variant="outlined" 
                    value={pirate.catchPhrase} 
                    name='catchPhrase' 
                    InputProps={{
                        readOnly: true,
                    }}/>
                <TextField 
                    label="Position" 
                    variant="outlined" 
                    value={pirate.position} 
                    name='catchPhrase' 
                    InputProps={{
                        readOnly: true,
                    }}/><br/>
                <FormControlLabel control={<Switch checked={newPirate.isPegLeg} name='isPegLeg' onChange={e=>updatePirate(e)} />} label="Peg Leg" />
                <FormControlLabel control={<Switch checked={newPirate.isEyePatch} name='isEyePatch' onChange={e=>updatePirate(e)} />} label="Eye Patch" />
                <FormControlLabel control={<Switch checked={newPirate.isHookHand} name='isHookHand' onChange={e=>updatePirate(e)} />} label="Hook Hand" />
                <Button type='submit' variant='contained'>Submit</Button>
            </Stack>
        </form>
    </Container>

    )
}

export default Display