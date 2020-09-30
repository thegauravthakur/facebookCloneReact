import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import UserOptions from './MessengerUserOptions'
import './MessengerDropDownUser.scss'

function MessengerDropDownUser({ src, name, message, date }) {
  const [userOptionOpen, setUserOptionsOpen] = useState(false)

  const toggleUserOptionStatus = () => {
    setUserOptionsOpen((state) => !state)
  }

  return (
    <div className='messengerDropDownUser'>
      <div className='messengerDropDownUser__options' onClick={toggleUserOptionStatus}>
        <MoreHorizIcon className='messengerDropDownUser__options__icon' />
      </div>
      <UserOptions
        isUserOptionOpen={userOptionOpen}
        setUserOptionsOpen={setUserOptionsOpen}
        outsideClickIgnoreClass={'messengerDropDownUser__options'}
      />

      <Avatar className='messengerDropDownUser__avatar' src={src} />
      <div className='messengerDropDownUser__content'>
        <h5>{name}</h5>
        <p>
          {message}
          <span> &#8729; {date}</span>
        </p>
      </div>
    </div>
  )
}

export default MessengerDropDownUser
