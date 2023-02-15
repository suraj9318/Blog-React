import { formatISO9075 } from 'date-fns'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const PostPage = () => {
   const {id} =  useParams()
    const [postInfo, setPostInfo] = useState(null)
   const getData = async() =>{
    const request = await fetch(`http://localhost:5000/post/${id}`)
    const data = await  request.json();
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
    <>
    <div className='post-page'>
        <h1>{postInfo.title}</h1>
        <p className="info">
            <a href="">Suraj Mishra</a>
            <time>{formatISO9075(new Date(postInfo.createdAt))}</time>
          </p>


        <div className="image">
            <img src={'http://localhost:5000/'+postInfo.cover} alt="" />
        </div>
        <div dangerouslySetInnerHTML={{__html : postInfo.content}}/>
    </div>
    </>
  )
}

export default PostPage
