import React from 'react'
import { useHistory } from 'react-router-dom'
import './ForgotPasswordBody.scss'

function ForgotPasswordBody({ emailToUpdate, setEmailToUpdate, sendPasswordResetEmail }) {
  const history = useHistory()
  return (
    <div className='forgotPasswordBody'>
      <div className='forgotPasswordBody__container'>
        <h3>Find Your Account</h3>
        <hr className='forgotPasswordBody__line' />

        <form className='forgotPasswordBody__form'>
          <div className='forgotPasswordBody__form__field'>
            <p>Please enter your email or phone number to search for your account.</p>
            <input
              value={emailToUpdate}
              onChange={(e) => setEmailToUpdate(e.target.value)}
              type='text'
              placeholder='Email'
            />
          </div>

          <div className='forgotPasswordBody__footer'>
            <button
              onClick={sendPasswordResetEmail}
              className='forgotPasswordBody__footer__button forgotPasswordBody__footer__button__search '>
              Search
            </button>
            <button
              onClick={() => history.push('/login')}
              className='forgotPasswordBody__footer__button forgotPasswordBody__footer__button__cancel'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordBody
