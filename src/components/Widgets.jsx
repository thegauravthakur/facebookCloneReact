import React from 'react'
import './Widgets.scss'

export default function Widgets() {
  return (
    <div className='widgets'>
      <iframe
        width='340'
        height='100%'
        style={{ border: 'none', overflow: 'hidden' }}
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        scrolling='no'
        allowtransparency='true'
        allow='encrypted-media'
        frameBorder='0'
        title='Facebook Widgets'></iframe>
    </div>
  )
}
