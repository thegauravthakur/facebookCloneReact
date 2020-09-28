import React, { useEffect } from 'react'
import facebookIcon from '../img/facebook.png'
import { Link } from 'react-router-dom'
import './ForgotPasswordNavbar.scss'

function ForgotPasswordNavbar({ email, setEmail, password, setPassword }) {
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'

    document.title = "Forgot Password | Can't Log In | Facebook'"

    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
  }, [])

  return (
    <div className='forgotPasswordNavbar'>
      <div className='forgotPasswordNavbar__container'>
        <div className='forgotPasswordNavbar__logo'>
          <Link to='/'>
            <img className='forgotPasswordNavbar__logo__img' src={facebookIcon} alt='Facebook Logo' />
          </Link>
        </div>

        <form className='forgotPasswordNavbar__form'>
          <div className='forgotPasswordNavbar__form__field'>
            <label className='forgotPasswordNavbar__form__field__label' htmlFor='email'>
              Email
            </label>
            <input id='email' type='text' value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className='forgotPasswordNavbar__form__field'>
            <label className='forgotPasswordNavbar__form__field__label' htmlFor='password'>
              Password
            </label>
            <input id='password' type='text' value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <button>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordNavbar
