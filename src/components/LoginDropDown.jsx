import React, { useState } from 'react'
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp'
import './LoginDropDown.scss'

function LoginDropDown() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='loginDropDown'>
      <label className='loginDropDown__label' htmlFor='email'>
        Email
      </label>
      <input type='text' id='email' value={email} onChange={(e) => setEmail(e.target.value)} />

      <label className='loginDropDown__label' htmlFor='password'>
        Password
      </label>
      <input type='text' id='password' value={password} onChange={(e) => setPassword(e.target.value)} />

      <p>Forgot Account?</p>

      <button className='loginDropDown__login'>Log In</button>
      <p>Do you want to join Facebook?</p>
      <button className='loginDropDown__signup'>Sign Up</button>
    </div>
  )
}

export default LoginDropDown
