import React, { useState, useEffect } from 'react'
import { Button, IconButton } from '@material-ui/core'
import Message from '../components/Message'
import SendIcon from '@material-ui/icons/Send'
import { db } from '../firebase'
import FlipMove from 'react-flip-move'
import firebase from 'firebase'
import './Messenger.scss'

export default function Messenger() {
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([])
  const [username, setUsername] = useState('')

  useEffect(() => {
    document.title = 'Messenger'
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yg/r/4_vfHVmZ5XD.ico'
  }, [])

  useEffect(() => {
    setUsername(prompt('Please Enter Your Name'))
  }, [])

  useEffect(() => {
    db.collection('messages')
      .orderBy('timestamp', 'asc')
      .onSnapshot((snapshot) => {
        setMessages(snapshot.docs.map((doc) => ({ id: doc.id, message: doc.data() })))
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
      <img src='https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100' alt='' />
      <h2>Welcome {username}</h2>
      <form className='messenger__form'>
        <input placeholder='Enter a Message' type='text' onChange={(e) => setInput(e.target.value)} value={input} />
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

      <FlipMove>
        {messages.map(({ message, id }) => (
          <Message key={id} message={message} username={username} />
        ))}
      </FlipMove>
    </div>
  )
}
