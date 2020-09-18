import React from 'react'
import { Avatar } from '@material-ui/core'
import './Post.scss'

export default function Post({ profileImage, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profileImage} className='post__top__avatar' />

        <div className='post__top__ind'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>
    </div>
  )
}
