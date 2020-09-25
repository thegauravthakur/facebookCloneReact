import React from 'react'
import { Link } from 'react-router-dom'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown'
import './ErrorNavbar.scss'
import facebookIcon from '../img/facebook.png'

export default function ErrorNavbar() {
  return (
    <div className='errorNavbar'>
      <div className='errorNavbar__container'>
        <div className='errorNavbar__logo'>
          <img className='errorNavbar__logo__img' src={facebookIcon} alt='Facebook Logo' />
          <Link to='/home'>Sign Up</Link>
        </div>

        <div className='errorNavbar__text'>
          <p>Join or Log into Facebook </p>
          <ArrowDropDownIcon className='errorNavbar__text__icon' />
        </div>
      </div>
    </div>
  )
}
