import React from 'react'
import './Message.scss'

export default function Message({ message, username }) {
  return (
    <div className='message'>
      <h2>
        {username} : {message}
      </h2>
    </div>
  )
}
