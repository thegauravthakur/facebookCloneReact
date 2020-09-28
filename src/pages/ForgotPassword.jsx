import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from '../components/Footer'
import { auth } from '../firebase'
import Navbar from '../components/ForgotPasswordNavbar'
import Body from '../components/ForgotPasswordBody'
import './ForgotPassword.scss'
import UserContext from '../UserProvider'

function ForgotPassword() {
  const history = useHistory()

  const { addError } = useContext(UserContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailToUpdate, setEmailToUpdate] = useState('')

  const emailAndPasswordLogin = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push('/home')
      })
      .catch((e) => {
        addError(e.message)
        history.push('/login')
      })
  }

  return (
    <div className='forgotPassword'>
      <Navbar
        email={email}
        password={password}
        setEmail={setEmail}
        setPassword={setPassword}
        login={emailAndPasswordLogin}
      />
      <Body emailToUpdate={emailToUpdate} setEmailToUpdate={setEmailToUpdate} />
      <Footer forgotPassword />
    </div>
  )
}

export default ForgotPassword
