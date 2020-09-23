import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Message from '../components/Message'
import './Messenger.scss'
import { db } from '../firebase'

export default function Messenger() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    { username: 'Willam', message: 'Hello Brother' },
    { username: 'Simms', message: 'Hello Brother' },
    { username: 'Willam', message: 'Hello Brother' },
  ])

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'))
  }, [])

  useEffect(() => {
    db.collection('messages').onSnapshot((snapshot) => {
      setMessages(snapshot.docs.map((doc) => doc.data()))
    })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    setMessages([...messages, { username: username, message: input }])

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
