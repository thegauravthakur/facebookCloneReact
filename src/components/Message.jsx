import React from 'react'
import './Message.scss'

export default function Message({ message }) {
  return (
    <div className='message'>
      <p>{message}</p>
    </div>
  )
}
