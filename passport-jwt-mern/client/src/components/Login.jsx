import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
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
          navigate('/login');
        });
      }, [navigate]);

    const handleLogin = () => {
        axios.post('http://localhost:5000/login', {username, password})
        .then((user)=>{
            localStorage.setItem('token', user.data.token);
            console.log('user is LoggedIn successfully');
            navigate('/profile');
        })
        .catch((error)=>{
            console.log(error.message);
            navigate('/login');
        });
    };
    return (
        <div>
            <h2>Login Page</h2>
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
               <button type='submit' onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Login;