import React, { useState } from 'react'
import './Messenger.scss'

export default function Messenger() {
  const [input, setInput] = useState('')
  return (
    <div className='messenger'>
      <input type='text' onChange={(e) => setInput(e.target.value)} value={input} />
      <button>Send Message</button>
    </div>
  )
}
