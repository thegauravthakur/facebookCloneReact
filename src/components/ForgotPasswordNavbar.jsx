import React, { useEffect } from 'react'
import './ForgotPasswordNavbar.scss'

function ForgotPasswordNavbar() {
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yo/r/iRmz9lCMBD2.ico'

    document.title = "Forgot Password | Can't Log In | Facebook'"

    document.body.style.overflowY = 'hidden'
    document.documentElement.scrollTop = 0
  }, [])

  return <div className='forgotPasswordNavbar'></div>
}

export default ForgotPasswordNavbar
