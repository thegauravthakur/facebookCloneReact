import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import VideocamIcon from '@material-ui/icons/Videocam'
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary'
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon'
import './PostSender.scss'
import { useStateValue } from '../StateProvider'

export default function PostSender() {
  const [{ user }, dispatch] = useStateValue()

  const [input, setInput] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setImageUrl('')
    setInput('')
  }

  return (
    <div className='postSender'>
      <div className='postSender__top'>
        <Avatar src={user.photoURL} />
        <form>
          <input
            type='text'
            placeholder='Whats on your mind ?'
            className='postSender__topinput'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type='text'
            placeholder='Image URL (Optional)'
            className='postSender__topImageinput'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button onClick={handleSubmit} type='submit'>
            Submit
          </button>
        </form>
      </div>
      <div className='postSender__bottom'>
        <div className='postSender__bottom__option'>
          <VideocamIcon className='postSender__bottom__option__icon' style={{ color: 'red' }} />
          <h3>Live Video</h3>
        </div>

        <div className='postSender__bottom__option'>
          <PhotoLibraryIcon className='postSender__bottom__option__icon' style={{ color: 'green' }} />
          <h3>Photo/Video</h3>
        </div>

        <div className='postSender__bottom__option'>
          <InsertEmoticonIcon className='postSender__bottom__option__icon' style={{ color: 'orange' }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  )
}
