import React from 'react'
import './SidebarRow.scss'
import { Avatar } from '@material-ui/core'

export default function SidebarRow({ title, Icon, userRow, image, shortcut }) {
  return (
    <div className='sidebarrow'>
      {userRow && <Avatar className='sidebarrow__avatar' />}
      {Icon && (
        <div className='sidebarrow__Icon__container'>
          <Icon className='sidebarrow__Icon' />
        </div>
      )}
      {image && <img src={image} className={`sidebarrow__image ${shortcut && 'sidebarrow__image__shortcut'}`} alt='' />}
      <h4>{title}</h4>
    </div>
  )
}
