import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import { FormControlLabel, Checkbox, Select, MenuItem, Stack } from '@mui/material';
import axios from 'axios';

const Form = (props) => {
    const { name, method, path, hasCaptain } = props;
    const [ pirate, setPirate ] = useState({
        name:'',
        imageUrl: '',
        numChest: 0,
        catchPhrase: '',
        position:'',
        isPegLeg: true,
        isEyePatch: true,
        isHookHand: true
    })

    let positionArray = ['First Mate','Captain', 'Quarter Master', 'Boatswain', 'Powder Monkey']
    const [ errors, setErrors ] = useState([]);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(hasCaptain){
            console.log(pirate.position)
            if(pirate.position == 'Captain'){
                setErrors(['There can only be ONE captain'])
            }
        }
        
        else{
            axios[method]('http://localhost:8000/api/'+ path, pirate)
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
    }

    const createPirate = (e, value) =>{
        setPirate({...pirate, [e.target.name] : value})
    }

    const nav = useNavigate();

    return (
        <Container maxWidth="sm">
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <Stack spacing={2}>
                    <TextField id="outlined-basic" label="Pirate Name *" variant="outlined" value={pirate.name} name='name' onChange={e=> {
                    createPirate(e, e.target.value)}}/>       
                    <TextField id="outlined-basic" label="Image Url *" variant="outlined" value={pirate.imageUrl} name='imageUrl' onChange={e=> {
                    createPirate(e, e.target.value)}}/>       
                    <TextField id="outlined-basic" label="# of Treausre Chests *" variant="outlined" type="number"
                    InputProps={{ inputProps: { min: 0 } }}value={pirate.numChest} name='numChest' onChange={e=> {createPirate(e, e.target.value)}}/>       
                    <TextField id="outlined-basic" label="Pirate Catch Phrase *" variant="outlined" value={pirate.catchPhrase} name='catchPhrase' onChange={e=> {
                    createPirate(e, e.target.value)}}/>
                    <select
                        label="Position"
                        name='position'
                        onChange={e=>createPirate(e, e.target.value)}
                    >
                        {
                        positionArray.map((position, index)=>{
                            return <option key={index} value={position}>{position}</option>
                        })
                    }
                    </select>       
                    <FormControlLabel control={<Checkbox checked={pirate.isPegLeg} name='isPegLeg' onChange={e=>createPirate(e, e.target.checked)} />} label="Peg Leg" />
                    <FormControlLabel control={<Checkbox checked={pirate.isEyePatch} name='isEyePatch' onChange={e=>createPirate(e, e.target.checked)} />} label="Eye Patch" />
                    <FormControlLabel control={<Checkbox checked={pirate.isHookHand} name='isHookHand' onChange={e=>createPirate(e, e.target.checked)} />} label="Hook Hand" />
                    <Button type='submit' variant='contained'>Submit</Button>
                </Stack>
            </form>
        </Container>
    )
}

export default Form


