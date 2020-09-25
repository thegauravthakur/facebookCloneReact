import React, { useEffect, useState } from 'react'
import './Login.scss'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import Footer from '../components/Footer'
import validateEmail from '../utilities/validateEmail'

export default function Login() {
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'

    document.title = 'Facebook - Log In or Sign Up'

    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const provider = new firebase.auth.GoogleAuthProvider()

  const [state, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='Facebook Logo' />
        <h2>Connect with friends and the world around you on Facebook.</h2>
      </div>
      <div className='login__form__container'>
        <form className='login__form'>
          <input type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
          <button className='login__form__button login__form__login'>Log In</button>
          <p>Forgot Password?</p>
          <hr />
          <button className='login__form__button login__form__signup'>Create New Account</button>
        </form>
      </div>
    </div>
  )
}
