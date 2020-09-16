import React from 'react'
import './SidebarRow.scss'
import { Avatar } from '@material-ui/core'

export default function SidebarRow({ title, src, Icon }) {
  return (
    <div className='sidebarrow'>
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  )
}
