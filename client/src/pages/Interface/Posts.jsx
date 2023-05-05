import React from 'react'
import './style.css'
import Post from '../../components/Parts/Post'
import Publish from '../../components/Parts/Publish'


const Posts = () => {
  return (
    <div className='posts'>
      <Publish />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  )
}

export default Posts