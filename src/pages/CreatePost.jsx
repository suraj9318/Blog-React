import React, { useContext, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
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

const CreatePost = () => {
    const {userInfo, profile} = useContext(UserContext)
    const navigate = useNavigate();
    const initialState = {
        title : '',
        summary : '',
        content : '',
        files : ''
    }
    const [data,setData] = useState(initialState) 

    const createNewPost = async (e) =>{
        e.preventDefault();
        const values = new FormData();
        values.set('title', data.title)
        values.set('summary', data.summary)
        values.set('content', data.content)
        values.set('file', data.files[0])

        const resp = await fetch('http://localhost:5000/post ', {
                method: 'POST', // or 'PUT'
                body: values,
            })
        if(resp.ok){
            setData(initialState);
            toast.success('Post Created Successfully')
            navigate('/')
        }
        else{
            toast.error("Something went Wrong")
        }
            } 

            if(profile?.username !== userInfo){
                return <h1>Not a Valid user</h1>
            }
            
   return (
    <form onSubmit={createNewPost}>
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

export default CreatePost
