import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
   const {id} =  useParams()
    const [postInfo, setPostInfo] = useState(null)
   const getData = async() =>{
    const request = await fetch(`http://localhost:5000/post/${id}`)
    const data = request.json();
    setPostInfo(data)
   }

   useEffect(()=>{
        getData();
   },[])

   if(!postInfo){
    return (
        <>
        <h2>No data Found !!</h2>
        </>
    )
   }
  return (
    <div>
       hello
    </div>
  )
}

export default PostPage
