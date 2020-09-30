import React from 'react'
import CheckIcon from '@material-ui/icons/Check'
import { RiMessengerFill } from 'react-icons/ri'
import onClickOutside from 'react-onclickoutside'
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined'
import NotificationsIcon from '@material-ui/icons/Notifications'
import PhoneIcon from '@material-ui/icons/Phone'
import VideocamIcon from '@material-ui/icons/Videocam'
import './MessengerUserOptions.scss'

function MessengerDropDownUserOptions({ isUserOptionOpen, setUserOptionsOpen }) {
  MessengerDropDownUserOptions.handleClickOutside = () => {
    setUserOptionsOpen(false)
  }

  return (
    <div className={`messengerUserOptions ${isUserOptionOpen && 'messengerUserOptions__Open'}`}>
      <div className='messengerUserOptions__option'>
        <CheckIcon className='messengerUserOptions__option__icon' />
        <h3>Mark as Unread</h3>
      </div>

      <div className='messengerUserOptions__option'>
        <RiMessengerFill className='messengerUserOptions__option__icon' />
        <h3>Open in Messenger</h3>
      </div>

      <div className='messengerUserOptions__option'>
        <AccountCircleOutlinedIcon className='messengerUserOptions__option__icon' />
        <h3>View profile</h3>
      </div>

      <div className='messengerUserOptions__option'>
        <NotificationsIcon className='messengerUserOptions__option__icon' />
        <h3>Mute conversion</h3>
      </div>

      <div className='messengerUserOptions__option'>
        <PhoneIcon className='messengerUserOptions__option__icon' />
        <h3>Audio Call</h3>
      </div>

      <div className='messengerUserOptions__option'>
        <VideocamIcon className='messengerUserOptions__option__icon' />
        <h3>Video Chat</h3>
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => MessengerDropDownUserOptions.handleClickOutside,
}

export default onClickOutside(MessengerDropDownUserOptions, clickOutsideConfig)
