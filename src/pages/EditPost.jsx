import React, { useContext, useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../UserContext';

const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline','strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  }

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ]

const EditPost = () => {
    const {id} =  useParams()
    const getData = async() =>{
        const request = await fetch(`http://localhost:5000/post/${id}`)
        const data = await  request.json();    

        console.log(data);
        
       }
    
       useEffect(()=>{
            getData();
       },[])


    const {userInfo, profile} = useContext(UserContext)
    const navigate = useNavigate();
    const initialState = {
        title : '',
        summary : '',
        content : '',
        files : ''
    }
    const [data,setData] = useState(initialState) 


    const updatePost = async (e) =>{
        e.preventDefault();
       
    }
   return (
    <form onSubmit={updatePost}>
        <label className='label' htmlFor="">Title</label>
        <input type="text" placeholder='Title' className='input' value={data.title} onChange={(e)=> setData({...data,title: e.target.value})}/>
        <label className='label' htmlFor="">Author</label>
        <input type="text" placeholder='Title' className='input' value={userInfo} disabled/>
        <label className='label' htmlFor="">Summary</label>

        <input type="text" placeholder='Summary' className='input' value={data.summary} onChange={(e)=> setData({...data,summary: e.target.value})} />

        <label className='label' htmlFor="">Image</label>
        <input className='input' type="file" onChange={(e)=> setData({...data, files : e.target.files})} />

        <label className='label' htmlFor="">Content</label>
        <ReactQuill className='input' modules={modules} formats={formats} value={data.content} onChange={(newValue)=> setData({...data,content: newValue})} />
        <button type='submit' className='btn'>Create Post</button>
    </form>
  )
}

export default EditPost
