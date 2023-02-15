import React, { useEffect, useState } from 'react'
import Post from '../components/Post'

const IndexPage = () => {
  const [data, setData] = useState([]);
  async function fetchPost (){
      const resp = await fetch('http://localhost:5000/getAllPost',{
        method : "GET"
      })
      const response =await resp.json();
      setData(response)
      console.log(response)
  }
  useEffect(()=>{
    fetchPost();
  },[])
  return (
    <div>
      <>
      {data.map((item)=>{
       const {_id,title,summary,content,cover} = item;
       return(
            <Post key={_id} {...item}/>
       ) 
      
      })}
      </>
    </div>
  )
}

export default IndexPage
