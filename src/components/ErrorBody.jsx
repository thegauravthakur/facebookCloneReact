import React from 'react'
import './ErrorBody.scss'

export default function errorBody() {
  return (
    <div className='errorBody'>
      <h1>This page isn't available</h1>
      <h2>The link you followed may be broken, or the page may have been removed.</h2>
      <img src='https://static.xx.fbcdn.net/rsrc.php/v3/yp/r/U4B06nLMGQt.png' alt='' />

      <div className='errorBody__links'>
        <p>Go back to the previous page</p>
        <p>Go to News Feed</p>
        <p>Visit our Help Center</p>
      </div>
    </div>
  )
}
