import React from 'react'
import './ForgotPasswordBody.scss'

function ForgotPasswordBody() {
  return (
    <div className='forgotPasswordBody'>
      <div className='forgotPasswordBody__container'>
        <h3>Find Your Account</h3>
        <hr className='forgotPasswordBody__line' />

        <form className='forgotPasswordBody__form'>
          <div className='forgotPasswordBody__form__field'>
            <p>Please enter your email or phone number to search for your account.</p>
            <input type='text' placeholder='Email' />
          </div>

          <div className='forgotPasswordBody__footer'>
            <button className='forgotPasswordBody__footer__button forgotPasswordBody__footer__button__search '>
              Search
            </button>
            <button className='forgotPasswordBody__footer__button forgotPasswordBody__footer__button__cancel'>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ForgotPasswordBody
