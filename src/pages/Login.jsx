import React, { useEffect, useState, useRef, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import firebase from 'firebase'
import { auth } from '../firebase'
import { actionTypes } from '../reducer'
import UserContext from '../UserProvider'
import Footer from '../components/Footer'
import SignUp from '../components/SignUp'
import SignUpBackDrop from '../components/SignUpBackdrop'
import './Login.scss'

export default function Login() {
  const { state, addUser, removeUser, addError, removeError } = useContext(UserContext)

  const history = useHistory()

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
    setGender,
    firstRender,
    firstNameErrorRef,
    lastNameErrorRef,
    emailErrorRef,
    passwordErrorRef,
    birthdayErrorRef,
    genderErrorRef,
    pronounErrorRef
  ) => {
    setFirstName('')
    signUpFirstNameInputRef.current.style.border = '1px solid #ccd0d5'

    setLastName('')
    lastNameRef.current.style.border = '1px solid #ccd0d5'

    setEmail('')
    emailRef.current.style.border = '1px solid #ccd0d5'

    setPassword('')
    passwordRef.current.style.border = '1px solid #ccd0d5'

    setBirthdayDay('January')
    birthdayDayRef.current.style.border = '1px solid #ccd0d5'

    setBirthdayMonth('1')
    birthdayMonthRef.current.style.border = '1px solid #ccd0d5'

    setBirthdayYear('2020')
    birthdayYearRef.current.style.border = '1px solid #ccd0d5'

    femaleSelectRef.current.checked = false

    maleSelectRef.current.checked = false

    customSelectRef.current.checked = false

    customSectionRef.current.style.display = 'none'

    setPronoun('Select your pronoun')

    setGender('')

    firstRender.current = true

    firstNameErrorRef.current.style.opacity = 0

    lastNameErrorRef.current.style.opacity = 0

    emailErrorRef.current.style.opacity = 0

    passwordErrorRef.current.style.opacity = 0

    birthdayErrorRef.current.style.opacity = 0

    genderErrorRef.current.style.opacity = 0

    pronounErrorRef.current.style.opacity = 0

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

  const googleSignIn = (e) => {
    e.preventDefault()
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result.user)
        addUser(result.user)
      })
      .catch((error) => {
        addError(error.message)
        history.push('/login')
      })
  }

  const emailAndPasswordLogin = (e) => {
    e.preventDefault()
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push('/home')
      })
      .catch((e) => {
        console.log(e)
        addError(e.message)
        history.push('/login')
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
            <input
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
            <button className='login__form__button login__form__loginButton' onClick={emailAndPasswordLogin}>
              Log In
            </button>
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
