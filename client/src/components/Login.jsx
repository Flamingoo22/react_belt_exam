import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Login = (props) => {
    const nav = useNavigate();
    const [email, setEmail] = useState('')
    const [user, SetUser] = useState({})
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([])


    const onSubmitHandler = (e) =>{
        e.preventDefault();
        axios.get('http://localhost:8000/api/user/'+email, email)
            .then(res=>{
                SetUser(res.data)
                if( password !== res.data.password){
                    setErrors([...errors, 'invalid password'])
                }
                else{
                    nav('/pirates')
                }
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

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {errors.map((err, index) => <p key={index}>{err}</p>)}
                <div className="mb-3">
                    <label className='form-label'>Email:</label>
                    <input className='form-control' type='text' value={email} onChange={e=>setEmail(e.target.value)}/>
                </div>
                <div className="mb-3">
                    <label  className='form-label'>Password:</label>
                    <input className='form-control' type='password' value={password} onChange={e=>setPassword(e.target.value)}/>
                </div>
                <input type='submit' value='Login'/>
            </form>
        </div>
    )
}

export default Login