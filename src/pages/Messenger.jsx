import React, { useState } from 'react'
import './Messenger.scss'

export default function Messenger() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const sendMessage = (e) => {
    setMessages([...messages, input])

    setInput('')
  }

  return (
    <div className='messenger'>
      <input type='text' onChange={(e) => setInput(e.target.value)} value={input} />
      <button onClick={sendMessage}>Send Message</button>
      {messages.map((message) => (
        <p>message</p>
      ))}
    </div>
  )
}
