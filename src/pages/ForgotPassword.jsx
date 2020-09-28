import React, { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/ForgotPasswordNavbar'
import Body from '../components/ForgotPasswordBody'
import './ForgotPassword.scss'

function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailToUpdate, setEmailToUpdate] = useState('')

  return (
    <div className='forgotPassword'>
      <Navbar email={email} password={password} setEmail={setEmail} setPassword={setPassword} />
      <Body emailToUpdate={emailToUpdate} setEmailToUpdate={setEmailToUpdate} />
      <Footer forgotPassword />
    </div>
  )
}

export default ForgotPassword
