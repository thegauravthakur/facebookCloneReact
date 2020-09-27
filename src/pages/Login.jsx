import React, { useEffect, useState, useRef } from 'react'
import './Login.scss'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'
import Footer from '../components/Footer'
import validateEmail from '../utilities/validateEmail'
import validatePassword from '../utilities/validatePassword'
import SignUp from '../components/SignUp'
import SignUpBackDrop from '../components/SignUpBackdrop'

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

  const [signUpOpen, setSignUpOpen] = useState(false)

  const signUpFirstNameInputRef = useRef(null)

  const closeFormHandler = (
    lastNameRef,
    emailRef,
    passwordRef,
    setFirstName,
    setLastName,
    setEmail,
    setPassword,
    setBirthdayDay,
    birthdayDayRef,
    setBirthdayMonth,
    birthdayMonthRef,
    setBirthdayYear,
    birthdayYearRef,
    femaleSelectRef,
    maleSelectRef,
    customSelectRef,
    customSectionRef,
    setPronoun,
    setGender
  ) => {
    setFirstName('')
    signUpFirstNameInputRef.current.style.border = '1px solid #ccd0d5'

    setLastName('')
    lastNameRef.current.style.border = '1px solid #ccd0d5'

    setEmail('')
    emailRef.current.style.border = '1px solid #ccd0d5'

    setPassword('')
    passwordRef.current.style.border = '1px solid #ccd0d5'

    setBirthdayDay('Day')
    birthdayDayRef.current.style.border = '1px solid #ccd0d5'

    setBirthdayMonth('Month')
    birthdayMonthRef.current.style.border = '1px solid #ccd0d5'

    setBirthdayYear('Year')
    birthdayYearRef.current.style.border = '1px solid #ccd0d5'

    femaleSelectRef.current.checked = false

    maleSelectRef.current.checked = false

    customSelectRef.current.checked = false

    customSectionRef.current.style.display = 'none'

    setPronoun('Select your pronoun')

    setGender('')

    setSignUpOpen(false)
  }

  const openFormHandler = (e) => {
    e.preventDefault()
    setSignUpOpen(true)

    setTimeout(() => {
      signUpFirstNameInputRef.current.focus()
    }, 0)
  }

  const provider = new firebase.auth.GoogleAuthProvider()

  const [state, dispatch] = useStateValue()

  const googleSignIn = () => {
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
    <>
      <div className='login'>
        <div className='login__logo'>
          <img src='https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg' alt='Facebook Logo' />
          <h2>Connect with friends and the world around you on Facebook.</h2>
        </div>
        <div className='login__form__container'>
          <form className='login__form'>
            <input
              type='text'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Email or Phone Number'
            />
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Password' />
            <button className='login__form__button login__form__loginButton'>Log In</button>
            <button className='login__form__button login__form__loginGoogle' onClick={googleSignIn}>
              Log In with Google
            </button>
            <p className='login__form__forgot'>Forgot Password?</p>
            <hr className='login__form__line' />
            <button className='login__form__button login__form__signupButton' onClick={openFormHandler}>
              Create New Account
            </button>
          </form>
        </div>
      </div>
      <SignUp
        closeFormHandler={closeFormHandler}
        isFormOpen={signUpOpen}
        signUpFirstNameInputRef={signUpFirstNameInputRef}
      />
      <SignUpBackDrop modalOpen={signUpOpen} />
      <Footer />
    </>
  )
}
