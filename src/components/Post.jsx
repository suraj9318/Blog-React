import React from 'react'

const Post = () => {
  return (
    <div className="post">
        <div className="image">
          <img src="https://techcrunch.com/wp-content/uploads/2023/02/slick-app.jpg?w=1390&crop=1" alt="" />
        </div>
        <div className="texts">
          <h2>Indian social media app Slick exposed childrens’ user data</h2>
          <p className="info">
            <a href="">Suraj Mishra</a>
            <time>11-02-2032 16:45</time>
          </p>
          <p className='summary'>Emerging Indian social media app Slick left an internal database containing users’ personal information, including data of school-going children, publicly exposed to the internet for months.
          database containing users’ personal information, including data of school-going children, publicly exposed to the internet for months.</p>
        </div>
      </div>
  )
}

export default Post
