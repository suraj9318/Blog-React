import React from 'react'
import {formatISO9075} from 'date-fns'
const Post = ({_id,title,summary,content,cover,createdAt}) => {
  return (
    <div className="post">
        <div className="image">
          <img src={'http://localhost:5000/'+cover} alt="" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a href="">Suraj Mishra</a>
            <time>{formatISO9075(new Date(createdAt))}</time>
          </p>
          <p className='summary'>{summary}</p></div>
      </div>
  )
}

export default Post
