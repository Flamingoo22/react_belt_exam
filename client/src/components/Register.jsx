import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


const Register = () => {
    const nav = useNavigate();
    const [user, setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confirmPassword:'',
    })
    const [errors, setErrors] = useState([])

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        if(user.password !== user.confirmPassword){
            setErrors(['Password does not match']);
        }
        else{
            axios.post('http://localhost:8000/api/users', user)
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

    const createUser = (e) =>{
        setUser({...user, [e.target.name] : e.target.value})
    }
    return (
        <form onSubmit={onSubmitHandler}>
            {errors.map((err, index) => <p key={index}>{err}</p>)}
            <div className="mb-3">  
                <label className='form-label'>First Name:</label>
                <input className='form-control' type='text' value={user.firstName} name='firstName' onChange={e=>{createUser(e)}}/>
            </div>
            <div className="mb-3">  
                <label className='form-label'>Last Name:</label>
                <input className='form-control' type='text' value={user.lastName} name='lastName'onChange={e=>{createUser(e)}}/>
            </div>
            <div className="mb-3">  
                <label className='form-label'>Email:</label>
                <input className='form-control' type='text' value={user.email} name='email'onChange={e=>{createUser(e)}}/>
            </div>
            <div className="mb-3">  
                <label className='form-label'>Password</label>
                <input className='form-control' type='text' value={user.password} name='password'onChange={e=>{createUser(e)}}/>
            </div>
            <div className="mb-3">  
                <label className='form-label'>Confirm Password:</label>
                <input className='form-control' type='text' value={user.confirmPassword} name='confirmPassword'onChange={e=>{createUser(e)}}/>
            </div>
            <input type='submit' value='register' className='btn btn-primary'/>
        </form>
    )
}

export default Register