import React from 'react'
import { Avatar } from '@material-ui/core'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline'
import NearMeIcon from '@material-ui/icons/NearMe'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import './Post.scss'

export default function Post({ profileImage, image, username, timestamp, message }) {
  return (
    <div className='post'>
      <div className='post__top'>
        <Avatar src={profileImage} className='post__top__avatar' />

        <div className='post__top__info'>
          <h3>{username}</h3>
          <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
        </div>
      </div>

      <div className='post__bottom'>
        <p className='post__bottom__message'>{message}</p>
      </div>

      <div className='post__image'>
        <img src={image} alt='' />
      </div>

      <div className='post__options'>
        <div className='post__options__option'>
          <ThumbUpIcon className='post__options__option__icon' />
          <p>Like</p>
        </div>

        <div className='post__options__option'>
          <ChatBubbleOutlineIcon className='post__options__option__icon' />
          <p>Comment</p>
        </div>

        <div className='post__options__option'>
          <NearMeIcon className='post__options__option__icon' />
          <p>Share</p>
        </div>

        <div className='post__options__option'>
          <AccountCircleIcon className='post__options__option__icon' />
          <ExpandMoreOutlinedIcon />
        </div>
      </div>
    </div>
  )
}
