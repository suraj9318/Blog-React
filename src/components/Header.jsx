import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../UserContext'

const Header = () => {
    const {setUserInfo, userInfo} = useContext(UserContext)

    const checkUser =async ()=>{
        const request = await fetch('http://localhost:5000/profile',{
            credentials : 'include'
        })
       const res = await request.json() 
       setUserInfo(res.username);
    }
    useEffect(()=>{
        checkUser();
    },[userInfo])

    async function logout(){
         await fetch('http://localhost:5000/logout',{
            credentials : 'include',
            method : 'POST'
         })
         setUserInfo('')
    }
    return (
        <header>
            <Link to='/' className="logo">MyBlog</Link>
            {userInfo ? (
                <nav>
                <Link to='/create'>Create a post</Link>
                <a onClick={logout}>Logout</a>
                </nav>
            ) : 
            
            <nav>
                <Link to='/login'>Login</Link>
                <Link to='/register'>Register</Link>
            </nav>

            }
        </header>
    )
}

export default Header
