import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const [ username, setUsername] = useState('');
    const [ password, setPassword] = useState('');

    useEffect(()=> {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:5000/profile', {
          headers: {
              Authorization: token,
          },
        })
        .then((res)=> navigate('/profile'))
        .catch((err)=> {
          navigate('/register');
        });
      }, [navigate]);

    const handleRegister = () => {
        axios.post('http://localhost:5000/register', {username, password})
        .then(()=>{
            console.log('user is registered');
            navigate('/login');
        })
        .catch((error)=>{
            console.log(error.message);
            navigate('/register');
        });
    };
    return (
        <div>
            <h2>Registration Page</h2>
            <input
               type="text"
               placeholder='Username'
               value={username}
               onChange={(e)=> {setUsername(e.target.value);}}
               required
               />
               <input
               type="password"
               placeholder='Password'
               value={password}
               onChange={(e)=> {setPassword(e.target.value);}}
               required
               />
               <button type='submit' onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;