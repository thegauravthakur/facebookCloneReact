import React, { useState, useEffect } from 'react'
import { Button } from '@material-ui/core'
import Message from '../components/Message'
import './Messenger.scss'
import { db } from '../firebase'
import firebase from 'firebase'

export default function Messenger() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])

  const [username, setUsername] = useState('')

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'))
  }, [])

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
      })
  }, [])

  const sendMessage = (e) => {
    e.preventDefault()
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
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
