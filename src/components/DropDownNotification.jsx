import React from 'react'
import CakeIcon from '@material-ui/icons/Cake'
import { Avatar } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import './DropDownNotification.scss'

function DropDownNotification({ src, notification, time, color, Icon }) {
  return (
    <div className='DropDownNotification'>
      <FiberManualRecordIcon className='DropDownNotification__dot' />
      <Avatar className='DropDownNotification__avatar' src={src} />
      <div className='DropDownNotification__avatar__type' style={{ backgroundColor: color }}>
        <Icon className='DropDownNotification__avatar__type__icon' />
      </div>
      <div className='DropDownNotification__content'>
        <p className='DropDownNotification__content__text'>{notification}</p>
        <p className='DropDownNotification__content__time'>{time}</p>
      </div>
    </div>
  )
}

export default DropDownNotification
