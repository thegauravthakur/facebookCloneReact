import React from 'react'
import './Tip.scss'

function Tip({
  text,
  homeHover,
  friendsHover,
  watchHover,
  groupsHover,
  gamingHover,
  createHover,
  messengerHover,
  notificationsHover,
  accountHover,
}) {
  return (
    <div
      className={`tip ${homeHover && 'tip__home'} ${friendsHover && 'tip__friends'} ${watchHover && 'tip__watch'} ${
        groupsHover && 'tip__groups'
      } ${gamingHover && 'tip__gaming'} ${createHover && 'tip__create'} ${messengerHover && 'tip__messenger'} ${
        notificationsHover && 'tip__notifications'
      } ${accountHover && 'tip__account'}`}>
      <p>{text}</p>
    </div>
  )
}

export default Tip
