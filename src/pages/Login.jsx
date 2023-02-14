import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
  const [data,setData] = useState({
    username : '',
    password : ''
  })

  const navigate = useNavigate();
  const handleLogin = async(e)=>{
    e.preventDefault();

    const request = await fetch('http://localhost:5000/login',{
      method : 'POST',
      body : JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
    },
    credentials : 'include'
    })

      console.log(request)
    if(request.ok)
    {
      toast.success('welcome back '+ data.username);
      navigate('/')
    }
    else{
      toast.error('Wrong Credentials');
    }
    
  }
  return (
    
      <form className='login'>
          <h1>Login</h1>
        <input className='input' value={data.username} onChange={(e)=>{setData({...data,username:e.target.value})}} type="text" placeholder='username'/>
        <input className='input' value={data.password} onChange={(e)=>{setData({...data,password:e.target.value})}}  type="password" placeholder='password'/>
        <button className='btn' onClick={handleLogin}>Login</button>
      </form>

  )
}

export default Login
