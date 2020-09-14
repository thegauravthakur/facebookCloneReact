import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
import './Navbar.scss'

export default function Navbar() {
  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt='Facebook Logo'
        />

        <div className='navbar__input'>
          <SearchIcon className='navbar__input__icon' />
          <input type='text' />
        </div>
      </div>
      <div className='header__middle'></div>
      <div className='header__right'></div>
    </div>
  )
}
