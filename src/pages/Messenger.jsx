import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Message from '../components/Message'
import './Messenger.scss'

export default function Messenger() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { username: 'Willam', text: 'Hello Brother' },
    { username: 'Simms', text: 'Hello Brother' },
    { username: 'Willam', text: 'Hello Brother' },
  ])

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, { username: username, text: input }])

    setInput('')
  }

  return (
    <div className='messenger'>
      <h2>Welcome {username}</h2>
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
        <Message message={message} username={username} />
      ))}
    </div>
  )
}
