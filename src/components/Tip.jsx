import React from 'react'
import './Tip.scss'

function Tip({ text }) {
  return (
    <div className={`tip`}>
      <p>{text}</p>
    </div>
  )
}

export default Tip
