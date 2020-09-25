import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import './Footer.scss'

export default function Footer({ isErrorFooter }) {
  return (
    <div className='footer'>
      <div className={`footer__container ${isErrorFooter && 'footer__error__container'}`}>
        <ul className='footer__list'>
          <li>English (US)</li>
          <li>Français (France)</li>
          <li>Español</li>
          <li>Bahasa Indonesia</li>
          <li>Italiano</li>
          <li>Deutsch</li>
          <li>中文(简体)</li>
          <li>Português (Brasil)</li>
          <li>العربية</li>
          <li>हिन्दी</li>
          <li>日本語</li>
          <button className='footer__list__button'>
            <AddIcon className='footer__list__icon' />
          </button>
        </ul>
        <hr className='footer__line' />

        <ul className='footer__list'>
          <li>Sign Up</li>
          <li> Log In</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Watch</li>
          <li>People</li>
          <li>Pages</li>
          <li>Page Categories</li>
          <li>Places</li>
          <li>Games</li>
          <li>Locations</li>
          <li>Marketplace</li>
          <li>Facebook Pay</li>
          <li>Groups</li>
        </ul>

        <ul className='footer__list'>
          <li>Oculus</li>
          <li>Portal</li>
          <li>Instagram</li>
          <li>Local</li>
          <li>Fundraiser</li>
          <li>Services</li>
          <li>Voting Information Center</li>
          <li>About</li>
          <li>Create Ad</li>
          <li>Create Page</li>
          <li>Developers</li>
          <li>Careers</li>
          <li>Privacy</li>
        </ul>

        <ul className='footer__list'>
          <li>Cookies</li>
          <li>Ad Choices</li>
          <li>Terms</li>
          <li>Help</li>
        </ul>

        <p>Facebook &copy; 2020</p>
      </div>
    </div>
  )
}
