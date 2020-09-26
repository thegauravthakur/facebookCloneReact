import React from 'react'
import './SignUpBackdrop.scss'

function SignUpBackdrop({ modalOpen }) {
  return <div className={`signupBackDrop ${modalOpen && 'signupBackDrop__Open'}`}></div>
}

export default SignUpBackdrop
