import React from 'react'
import { Link } from 'react-router-dom'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import CreateIcon from '@material-ui/icons/Create'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import Tip from './Tip'
import MessengerDropDownUser from './MessengerDropDownUser'
import './MessengerDropDown.scss'

function MessengerDropDown() {
  return (
    <div className='messengerDropDown'>
      <div className='messengerDropDown__container'>
        <div className='messengerDropDown__header'>
          <h3>Messenger</h3>

          <div className='messengerDropDown__header__icon__container'>
            <FullscreenExitIcon className='messengerDropDown__header__icon' />
            <VideoCallIcon className='messengerDropDown__header__icon' />
            <CreateIcon className='messengerDropDown__header__icon' />
            <MoreHorizIcon className='messengerDropDown__header__icon' />
          </div>
        </div>

        <div className='messengerDropDown__search'>
          <SearchIcon className='messengerDropDown__search__icon' />
          <input type='text' className='messengerDropDown__search__input' placeholder='Search Messenger' />
        </div>
      </div>
    </div>
  )
}

export default MessengerDropDown
