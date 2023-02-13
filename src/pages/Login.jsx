import React from 'react'

const Login = () => {
  return (
    
      <form className='login'>
          <h1>Login</h1>
        <input className='input' type="text" placeholder='username'/>
        <input className='input' type="password" placeholder='password'/>
        <button className='btn'>Login</button>
      </form>

  )
}

export default Login
