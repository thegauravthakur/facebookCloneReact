import React from 'react'
import './Checkbox.scss'

function Checkbox() {
  return (
    <div className='checkbox'>
      <input className='checkbox__input' type='checkbox' name='checkbox' id='checkbox' />
      <label className='checkbox__check' for='checkbox'></label>
    </div>
  )
}

export default Checkbox
