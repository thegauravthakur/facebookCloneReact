import React from 'react'
import { Avatar } from '@material-ui/core'
import './Story.scss'

export default function Story({ image, profileImage, title }) {
  return (
    <div
      className='story'
      style={{
        backgroundImage: `url(${image})`,
      }}>
      <Avatar src={profileImage} className='story__avatar' />
      <h4 className='story__title'>{title}</h4>
    </div>
  )
}
