import React from 'react'
import './Feed.scss'
import Stories from './Stories'
import PostSender from './PostSender'
import Post from './Post'

export default function Feed() {
  return (
    <div className='feed'>
      <Stories />
      <PostSender />
      <Post />
      <Post />
    </div>
  )
}
