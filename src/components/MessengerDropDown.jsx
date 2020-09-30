import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import CreateIcon from '@material-ui/icons/Create'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import Tip from './Tip'
import MessengerDropDownUser from './MessengerDropDownUser'
import './MessengerDropDown.scss'

function MessengerDropDown() {
  const history = useHistory()

  return (
    <div className='messengerDropDown'>
      <div className='messengerDropDown__container'>
        <div className='messengerDropDown__header'>
          <h4>Messenger</h4>

          <div className='messengerDropDown__header__icons'>
            <div className='messengerDropDown__header__icon__container' onClick={() => history.push('/messenger')}>
              <FullscreenExitIcon className='messengerDropDown__header__icon' />
              <Tip text='See All in Messenger' />
            </div>
            <div className='messengerDropDown__header__icon__container'>
              <VideoCallIcon className='messengerDropDown__header__icon' />
              <Tip text='Create new room' />
            </div>
            <div className='messengerDropDown__header__icon__container'>
              <CreateIcon className='messengerDropDown__header__icon' />

              <Tip text='New message' />
            </div>
            <div className='messengerDropDown__header__icon__container'>
              <MoreHorizIcon className='messengerDropDown__header__icon' />
              <Tip text='Options' />
            </div>
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
