import React, { useEffect, useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Footer from './Footer'
import UserContext from '../UserProvider'
import { auth, provider } from '../firebase'
import './LoginFail.scss'

export default function LoginFail() {
  const errorSectionRef = useRef(null)

  const history = useHistory()

  const { state, removeError, addUser, addError } = useContext(UserContext)

  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'

    document.title = 'Log into Facebook | Facebook'

    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
  }, [])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    if (state.error) {
      errorSectionRef.current.style.display = 'block'

      setTimeout(() => {
        errorSectionRef.current.style.display = 'none'
        removeError()
      }, 4000)
    } else {
      errorSectionRef.current.style.display = 'none'
    }
  }, [removeError, state.error])

  const googleLogin = (e) => {
    e.preventDefault()
    auth
      .signInWithPopup(provider)
      .then((result) => {
        addUser(result.user)
        history.push('/home')
      })
      .catch((error) => {
        addError(error.message)
        errorSectionRef.current.style.display = 'block'

        setTimeout(() => {
          errorSectionRef.current.style.display = 'none'
          removeError()
        }, 6000)
      })
  }

  const emailAndPasswordLogin = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push('/home')
      })
      .catch((error) => {
        addError(error.message)
        errorSectionRef.current.style.display = 'block'

        setTimeout(() => {
          errorSectionRef.current.style.display = 'none'
          removeError()
        }, 4000)
      })
  }

  return (
    <>
      <div className='loginFail'>
        <img
          src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg'
          alt='Facebook Logo'
          className='loginFail__logo'
        />

        <div className='loginFail__form__container'>
          <form className='loginFail__form'>
            <h4>Log Into Facebook</h4>

            <div className='loginFail__form__error' ref={errorSectionRef}>
              <h6>Wrong Credentails</h6>
              <p>{state.error || 'Invalid username or password'}</p>
            </div>

            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit' onClick={emailAndPasswordLogin} className='loginFail__form__button'>
              Log In
            </button>
            <p className='loginFail__form__text'>Forgot Password?</p>

            <div className='loginFail__lines'>
              <div className='loginFail__line loginFail__line__one'></div>
              <p className='loginFail__line__text'>or</p>
              <div className='loginFail__line loginFail__line__two'></div>
            </div>

            <button className='loginFail__google' onClick={googleLogin}>
              Login With Google
            </button>
          </form>
        </div>
      </div>
      <Footer isLoginFooter />
    </>
  )
}
