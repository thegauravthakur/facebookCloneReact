import React, { useState, useRef } from 'react'
import ErrorIcon from '@material-ui/icons/Error'
import HelpIcon from '@material-ui/icons/Help'
import CloseIcon from '@material-ui/icons/Close'
import validateEmail from '../utilities/validateEmail'
import validatePassword from '../utilities/validatePassword'
import validateYear from '../utilities/validateYear'
import validateName from '../utilities/validateName'
import ErrorNotification from './ErrorNotification'
import './SignUp.scss'

function SignUp({ closeFormHandler, isFormOpen, signUpFirstNameInputRef }) {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [birthdayDay, setBirthdayDay] = useState('')
  const [birthdayMonth, setBirthdayMonth] = useState('')
  const [birthdayYear, setBirthdayYear] = useState('')
  const [pronoun, setPronoun] = useState('')
  const [gender, setGender] = useState('')

  const customSectionRef = useRef(null)
  const formRef = useRef(null)
  const lastNameRef = useRef(null)
  const emailRef = useRef(null)
  const passwordRef = useRef(null)
  const daySelectRef = useRef(null)
  const monthSelectRef = useRef(null)
  const yearSelectRef = useRef(null)
  const femaleSelectRef = useRef(null)
  const maleSelectRef = useRef(null)
  const customSelectRef = useRef(null)
  const firstNameErrorRef = useRef(null)
  const lastNameErrorRef = useRef(null)
  const emailErrorRef = useRef(null)
  const passwordErrorRef = useRef(null)
  const birthdayErrorRef = useRef(null)
  const genderErrorRef = useRef(null)
  const pronounErrorRef = useRef(null)
  const firstNameNotificationErrorRef = useRef(null)
  const lastNameNotificationErrorRef = useRef(null)
  const emailNotificationErrorRef = useRef(null)
  const passwordNotificationErrorRef = useRef(null)
  const birthdayNotificationErrorRef = useRef(null)
  const genderNotificationErrorRef = useRef(null)
  const pronounNotificationErrorRef = useRef(null)
  const firstRender = useRef(true)

  const normalSelectChangeHandler = (e) => {
    if (e.target.value !== 'Custom' && e.target.checked) {
      customSectionRef.current.style.display = 'none'
    }
  }

  const customChangeHandler = (e) => {
    if (e.target.value === 'Custom' && e.target.checked) {
      customSectionRef.current.style.display = 'block'
    }
  }

  const blurInput = (ref, inputValue, validator, errorIconRef, errorNotificationRef) => {
    if (validator(inputValue)) {
      ref.current.style.border = '1px solid #ccd0d5'
      errorIconRef.current.style.opacity = 0
    } else {
      ref.current.style.border = '1px solid red'
      errorIconRef.current.style.opacity = 1
    }
    errorNotificationRef.current.style.display = 'none'
  }

  const focusInput = (ref, inputValue, validator, errorIconRef, errorNotificationRef, render = false) => {
    ref.current.style.border = '1px solid #ccd0d5'

    errorIconRef.current.style.opacity = 0

    if (render) {
      errorNotificationRef.current.style.display = 'none'
      firstRender.current = false
    } else {
      if (validator(inputValue)) {
        errorNotificationRef.current.style.display = 'none'
      } else {
        errorNotificationRef.current.style.display = 'block'
      }
    }
  }

  const blurSelect = () => {
    if (validateYear(birthdayYear)) {
      daySelectRef.current.style.border = '1px solid #ccd0d5'
      monthSelectRef.current.style.border = '1px solid #ccd0d5'
      yearSelectRef.current.style.border = '1px solid #ccd0d5'
    } else {
      daySelectRef.current.style.border = '1px solid red'
      monthSelectRef.current.style.border = '1px solid red'
      yearSelectRef.current.style.border = '1px solid red'
    }
  }

  const focusSelect = () => {
    daySelectRef.current.style.border = '1px solid #ccd0d5'
    monthSelectRef.current.style.border = '1px solid #ccd0d5'
    yearSelectRef.current.style.border = '1px solid #ccd0d5'
  }

  return (
    <div className={`signUp ${isFormOpen && 'signUp__Open'}`}>
      <div className='signUp__header'>
        <h3>Sign Up</h3>
        <p>It's quick and easy</p>
        <CloseIcon
          onClick={() =>
            closeFormHandler(
              lastNameRef,
              emailRef,
              passwordRef,
              setFirstName,
              setLastName,
              setEmail,
              setPassword,
              setBirthdayDay,
              daySelectRef,
              setBirthdayMonth,
              monthSelectRef,
              setBirthdayYear,
              yearSelectRef,
              femaleSelectRef,
              maleSelectRef,
              customSelectRef,
              customSectionRef,
              setPronoun,
              setGender,
              firstRender
            )
          }
          className='signUp__header__close'
        />
      </div>

      <hr className='signUp__line' />

      <form className='signUp__form__container' ref={formRef}>
        <div className='signUp__form'>
          <div className='signUp__form__name'>
            <ErrorNotification text="What's your name?" reference={firstNameNotificationErrorRef} />

            <input
              ref={signUpFirstNameInputRef}
              className='signUp__form__input signUp__form__input__first'
              type='text'
              placeholder='First name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              onBlur={() =>
                blurInput(
                  signUpFirstNameInputRef,
                  firstName,
                  validateName,
                  firstNameErrorRef,
                  firstNameNotificationErrorRef
                )
              }
              onFocus={() =>
                focusInput(
                  signUpFirstNameInputRef,
                  firstName,
                  validateName,
                  firstNameErrorRef,
                  firstNameNotificationErrorRef,
                  firstRender.current
                )
              }
              id='firstName'
            />
            <label htmlFor='firstName'>
              <ErrorIcon
                className='signUp__form__firstName__errorIcon signUp__form__errorIcon'
                ref={firstNameErrorRef}
              />
            </label>

            <ErrorNotification text="What's your name?" lastName reference={lastNameNotificationErrorRef} />

            <input
              className='signUp__form__input'
              type='text'
              placeholder='Last name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              onBlur={() =>
                blurInput(lastNameRef, lastName, validateName, lastNameErrorRef, lastNameNotificationErrorRef)
              }
              onFocus={() =>
                focusInput(lastNameRef, lastName, validateName, lastNameErrorRef, lastNameNotificationErrorRef)
              }
              ref={lastNameRef}
              id='lastName'
            />
            <label htmlFor='lastName'>
              <ErrorIcon className='signUp__form__lastName__errorIcon signUp__form__errorIcon' ref={lastNameErrorRef} />
            </label>
          </div>

          <ErrorNotification
            text="You'll use this when you log in and if you ever need to reset your password."
            email
            reference={emailNotificationErrorRef}
          />

          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='signUp__form__input__email signUp__form__input'
            ref={emailRef}
            onBlur={() => blurInput(emailRef, email, validateEmail, emailErrorRef, emailNotificationErrorRef)}
            onFocus={() => focusInput(emailRef, email, validateEmail, emailErrorRef, emailNotificationErrorRef)}
            id='email'
          />
          <label htmlFor='email'>
            <ErrorIcon className='signUp__form__email__errorIcon signUp__form__errorIcon' ref={emailErrorRef} />
          </label>

          <ErrorNotification
            text='Enter a combination of at least six numbers, letters and punctuation marks (like ! and &).'
            password
            reference={passwordNotificationErrorRef}
          />

          <input
            type='text'
            placeholder='New password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='signUp__form__input__password signUp__form__input'
            ref={passwordRef}
            onBlur={() =>
              blurInput(passwordRef, password, validatePassword, passwordErrorRef, passwordNotificationErrorRef)
            }
            onFocus={() =>
              focusInput(passwordRef, password, validatePassword, passwordErrorRef, passwordNotificationErrorRef)
            }
            id='password'
          />
          <label htmlFor='password'>
            <ErrorIcon className='signUp__form__password__errorIcon signUp__form__errorIcon' ref={passwordErrorRef} />
          </label>

          <div className='signUp__form__birthday'>
            <p className='signUp__form__birthday__text'>
              Birthday
              <HelpIcon titleAccess='Click for more information' className='signUp__form__birthday__text__icon' />
            </p>

            <ErrorNotification
              text='It looks like you entered the wrong info. Please be sure to use your real birthday.'
              birthday
              reference={birthdayNotificationErrorRef}
            />

            <ErrorIcon className='signUp__form__birthday__errorIcon signUp__form__errorIcon' ref={birthdayErrorRef} />

            <div className='signUp__form__birthday__select__container'>
              <select
                name='month'
                className='signUp__form__birthday__select signUp__form__birthday__select__month'
                title='Month'
                ref={monthSelectRef}
                onChange={(e) => setBirthdayMonth(e.target.value)}
                value={birthdayMonth}>
                <option value='Month'>Month</option>
                <option value='January'>Jan</option>
                <option value='February'>Feb</option>
                <option value='March'>Mar</option>
                <option value='April'>Apr</option>
                <option value='May'>May</option>
                <option value='June'>Jun</option>
                <option value='July'>Jul</option>
                <option value='August'>Aug</option>
                <option value='September'>Sep</option>
                <option value='October'>Oct</option>
                <option value='November'>Nov</option>
                <option value='December'>Dec</option>
              </select>

              <select
                name='day'
                className='signUp__form__birthday__select signUp__form__birthday__select__day'
                title='Day'
                ref={daySelectRef}
                onChange={(e) => setBirthdayDay(e.target.value)}
                value={birthdayDay}>
                <option value='Day'>Day</option>
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
                <option value='6'>6</option>
                <option value='7'>7</option>
                <option value='8'>8</option>
                <option value='9'>9</option>
                <option value='10'>10</option>
                <option value='11'>11</option>
                <option value='12'>12</option>
                <option value='13'>13</option>
                <option value='14'>14</option>
                <option value='15'>15</option>
                <option value='16'>16</option>
                <option value='17'>17</option>
                <option value='18'>18</option>
                <option value='19'>19</option>
                <option value='20'>20</option>
                <option value='21'>21</option>
                <option value='22'>22</option>
                <option value='23'>23</option>
                <option value='24'>24</option>
                <option value='25'>25</option>
                <option value='26'>26</option>
                <option value='27'>27</option>
                <option value='28'>28</option>
                <option value='29'>29</option>
                <option value='30'>30</option>
                <option value='31'>31</option>
              </select>

              <select
                name='year'
                className='signUp__form__birthday__select signUp__form__birthday__select__year'
                value={birthdayYear}
                onChange={(e) => setBirthdayYear(e.target.value)}
                title='Year'
                onBlur={blurSelect}
                onFocus={focusSelect}
                ref={yearSelectRef}>
                <option value='Year'>Year</option>
                <option value='2020'>2020</option>
                <option value='2019'>2019</option>
                <option value='2018'>2018</option>
                <option value='2017'>2017</option>
                <option value='2016'>2016</option>
                <option value='2015'>2015</option>
                <option value='2014'>2014</option>
                <option value='2013'>2013</option>
                <option value='2012'>2012</option>
                <option value='2011'>2011</option>
                <option value='2010'>2010</option>
                <option value='2009'>2009</option>
                <option value='2008'>2008</option>
                <option value='2007'>2007</option>
                <option value='2006'>2006</option>
                <option value='2005'>2005</option>
                <option value='2004'>2004</option>
                <option value='2003'>2003</option>
                <option value='2002'>2002</option>
                <option value='2001'>2001</option>
                <option value='2000'>2000</option>
                <option value='1999'>1999</option>
                <option value='1998'>1998</option>
                <option value='1997'>1997</option>
                <option value='1996'>1996</option>
                <option value='1995'>1995</option>
              </select>
            </div>
          </div>

          <ErrorNotification
            text='Please choose a gender. You can change who can see this later'
            gender
            reference={genderNotificationErrorRef}
          />

          <ErrorIcon className='signUp__form__gender__errorIcon signUp__form__errorIcon' ref={genderErrorRef} />

          <div className='signUp__form__gender'>
            <p className='signUp__form__gender__text'>
              Gender <HelpIcon titleAccess='Click for more information' className='signUp__form__gender__text__icon' />
            </p>
            <div className='signUp__form__gender__container'>
              <label className='signUp__form__gender__option signUp__form__gender__option__female' htmlFor='female'>
                Female
                <input
                  ref={femaleSelectRef}
                  onChange={normalSelectChangeHandler}
                  value='Female'
                  type='radio'
                  name='gender'
                  id='female'
                />
              </label>

              <label className='signUp__form__gender__option signUp__form__gender__option__male' htmlFor='male'>
                Male
                <input
                  ref={maleSelectRef}
                  onChange={normalSelectChangeHandler}
                  value='Male'
                  type='radio'
                  name='gender'
                  id='male'
                />
              </label>

              <label className='signUp__form__gender__option signUp__form__gender__option__custom' htmlFor='custom'>
                Custom
                <input
                  ref={customSelectRef}
                  value='Custom'
                  onChange={customChangeHandler}
                  type='radio'
                  name='gender'
                  id='custom'
                />
              </label>
            </div>
          </div>

          <div className='signUp__form__custom' ref={customSectionRef}>
            <select
              name='pronoun'
              id='pronoun'
              className='signUp__form__custom__select'
              value={pronoun}
              onChange={(e) => setPronoun(e.target.value)}>
              <option value='Select your pronoun'>Select your pronoun</option>
              <option value='She: "Wish her a happy birthday!"'>She: "Wish her a happy birthday!"</option>
              <option value='He: "Wish him a happy birthday!"'>He: "Wish him a happy birthday!"</option>
              <option value='Them: "Wish them a happy birthday!"'>Them: "Wish them a happy birthday!"</option>
            </select>

            <ErrorNotification text='Please select a pronoun' pronoun reference={pronounNotificationErrorRef} />

            <ErrorIcon className='signUp__form__pronoun__errorIcon signUp__form__errorIcon' ref={pronounErrorRef} />

            <p className='signUp__form__custom__text'>Your pronoun is visible to everyone</p>

            <input
              type='text'
              className='signUp__form__custom__input'
              placeholder='Gender (optional)'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            />
          </div>

          <p className='signUp__form__footerText'>
            By clicking Sign Up, you agree to our
            <span className='signUp__form__footerText__blue'> Terms</span>,
            <span className='signUp__form__footerText__blue'> Data Policy </span> and
            <span className='signUp__form__footerText__blue'> Cookies Policy</span>. You may receive SMS Notifications
            from us and can opt out any time.
          </p>

          <button className='signUp__form__button'>Sign Up</button>
        </div>
      </form>
    </div>
  )
}

export default SignUp
