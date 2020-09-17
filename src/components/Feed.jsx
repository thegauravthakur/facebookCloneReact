import React from 'react'
import './Feed.scss'
import Stories from './Stories'
import PostSender from './PostSender'

export default function Feed() {
  return (
    <div className='feed'>
      <Stories />
      <PostSender />
    </div>
  )
}
