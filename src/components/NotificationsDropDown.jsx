import React from 'react'
import onClickOutside from 'react-onclickoutside'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Notification from './DropDownNotification'
import CakeIcon from '@material-ui/icons/Cake'
import GroupIcon from '@material-ui/icons/Group'
import PostAddIcon from '@material-ui/icons/PostAdd'
import NotificationsIcon from '@material-ui/icons/Notifications'
import VideocamIcon from '@material-ui/icons/Videocam'
import './NotificationsDropDown.scss'

function NotificationsDropDown({ isDropDownOpen, setNotificationsDropDownOpen }) {
  return (
    <div className='notificationsDropDown'>
      <div className='notificationsDropDown__container'>
        <div className='notificationsDropDown__header'>
          <h4>Notifications</h4>
          <div className='notificationsDropDown__header__icon__container'>
            <MoreHorizIcon className='notificationsDropDown__header__icon' />
          </div>
        </div>

        <h5>New</h5>
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />

        <h5>Earlier</h5>

        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
        <Notification src color notification time type Icon />
      </div>
    </div>
  )
}

export default NotificationsDropDown
