import React from 'react'
import './SidebarRow.scss'
import { Avatar } from '@material-ui/core'

export default function SidebarRow({ title, src, Icon, userRow, image }) {
  return (
    <div className='sidebarrow'>
      {userRow && <Avatar className='sidebarrow__avatar' />}
      {Icon && <Icon className='sidebarrow__Icon' />}
      {image && <img src={image} className='sidebarrow__image' alt='' />}
      <h4>{title}</h4>
    </div>
  )
}
