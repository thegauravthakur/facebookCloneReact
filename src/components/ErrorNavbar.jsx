import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import './ErrorNavbar.scss'
import LoginDropDown from './LoginDropDown'
import facebookIcon from '../img/facebook.png'

export default function ErrorNavbar() {
  const [open, setOpen] = useState(false)

  const dropDownClickHandler = () => {
    setOpen((state) => !state)
  }

  return (
    <div className='errorNavbar'>
      <div className='errorNavbar__container'>
        <div className='errorNavbar__logo'>
          <Link to='/'>
            <img className='errorNavbar__logo__img' src={facebookIcon} alt='Facebook Logo' />
          </Link>

          <Link className='errorNavbar__logo__link' to='/home'>
            Sign Up
          </Link>
        </div>

        <div onClick={dropDownClickHandler} className='errorNavbar__text'>
          <p>Join or Log into Facebook </p>
          <ArrowDropDownIcon className='errorNavbar__text__icon' />
        </div>

        <LoginDropDown Open={open} />
      </div>
    </div>
  )
}
