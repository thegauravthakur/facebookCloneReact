import React, { useState } from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import './LoginDropDown.scss'

function LoginDropDown({ isModalOpen }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='loginDropDown'>
      <ArrowDropUpIcon className='loginDropDown__arrow' />
      <label className='loginDropDown__label' htmlFor='email'>
        Email
      </label>
      <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className='loginDropDown__label' htmlFor='password'>
        Password
      </label>
      <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <p className='loginDropDown__forgot'>Forgot Account?</p>

      <button className='loginDropDown__button loginDropDown__button__login'>Log In</button>
      <p className='loginDropDown__question'>Do you want to join Facebook?</p>
      <button className='loginDropDown__button loginDropDown__button__signup'>Sign Up</button>
    </div>
  )
}

export default LoginDropDown
