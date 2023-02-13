import React, { useState } from 'react'
import { toast } from 'react-toastify'

const Register = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = {
                username: username,
                password: password
            };
            
            if(username && password){
                const resp = await fetch('http://localhost:5000/register', {
                method: 'POST', // or 'PUT'
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })
            toast.success('Registered Successfully !!')
            setUsername('')
            setPassword('')
            }
            else{
                toast.error('All fields are required')
            }

        } catch (error) {
            
        }
    }
    return (
        <form className='register'>
            <h1>Register</h1>
            <input className='input' type="text" value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder='username' />
            <input className='input' type="password" value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder='password' />
            <button className="btn" onClick={handleSubmit}>Registers</button>
        </form>
    )
}

export default Register
