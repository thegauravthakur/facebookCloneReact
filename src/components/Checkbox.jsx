import React from 'react'
import './Checkbox.scss'

function Checkbox() {
  return (
    <div className='checkbox'>
      <input className='checkbox__input' type='checkbox' name='checkbox' id='checkbox' />
      <span className='checkbox__check'></span>
    </div>
  )
}

export default Checkbox
