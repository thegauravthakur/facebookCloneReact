import React from 'react'
import AddIcon from '@material-ui/icons/Add'
import './Footer.scss'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='footer__container'>
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
      </div>
    </div>
  )
}
