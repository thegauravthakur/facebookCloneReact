import React from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import CreateIcon from '@material-ui/icons/Create'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import Tip from './Tip'
import './MessengerDropDown.scss'

function MessengerDropDown() {
  return (
    <div className='messengerDropDown'>
      <div className='messengerDropDown__container'>
        <div className='messengerDropDown__header'>
          <h3>Messenger</h3>
        </div>
        <FullscreenExitIcon className='messengerDropDown__header__icon' />
      </div>
    </div>
  )
}

export default MessengerDropDown
