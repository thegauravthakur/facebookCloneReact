import React, { useState } from 'react'
import './SignUp.scss'

function SignUp() {
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='signUp'>
      <div className='signUp__header'>
        <h3>Sign Up</h3>
        <p>It's quick and easy</p>
      </div>

      <div className='signUp__form'>
        <div className='signUp__form__name'>
          <input type='text' placeholder='First Name' />
          <input type='text' placeholder='Last Name' />
        </div>

        <input type='text' placeholder='Email' />

        <input type='text' placeholder='New Password' />

        <div className='signUp__form__birthday'>
          <select name='month'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>

          <select name='day'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>

          <select name='year'>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
            <option value=''></option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default SignUp
