import React from 'react'
import CakeIcon from '@material-ui/icons/Cake'
import { Avatar } from '@material-ui/core'
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord'
import './DropDownNotification.scss'

function DropDownNotification({ src, notification, type, time, color, Icon }) {
  return (
    <div className='DropDownNotification'>
      <FiberManualRecordIcon className='DropDownNotification__dot' />
      <Avatar className='DropDownNotification__avatar' />
      <div className='DropDownNotification__avatar__type'>
        <CakeIcon className='DropDownNotification__avatar__type__icon' />
      </div>
      <div className='DropDownNotification__content'>
        <p className='DropDownNotification__content__text'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero voluptas.
        </p>
        <p className='DropDownNotification__content__time'>20 minutes ago</p>
      </div>
    </div>
  )
}

export default DropDownNotification
