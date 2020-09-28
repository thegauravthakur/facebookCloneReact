import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/ForgotPasswordNavbar'
import Body from '../components/ForgotPasswordBody'
import './ForgotPassword.scss'

function ForgotPassword() {
  return (
    <div className='forgotPassword'>
      <Navbar />
      <Body />
      <Footer forgotPassword />
    </div>
  )
}

export default ForgotPassword
