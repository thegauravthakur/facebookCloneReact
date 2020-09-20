import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Message from '../components/Message'
import './Messenger.scss'

export default function Messenger() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, input])

    setInput('')
  }

  return (
    <div className='messenger'>
      <form>
        <input type='text' onChange={(e) => setInput(e.target.value)} value={input} />
        <Button
          disabled={!input}
          className='messenger__button'
          type='submit'
          onClick={sendMessage}
          variant='contained'
          disableElevation>
          Send Message
        </Button>
      </form>
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </div>
  )
}
