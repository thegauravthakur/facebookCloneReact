import React, { useEffect } from 'react'
import SearchIcon from '@material-ui/icons/Search'
import { BsPeople } from 'react-icons/bs'
import HomeIcon from '@material-ui/icons/Home'
import SubscriptionsOutlinedIcon from '@material-ui/icons/SubscriptionsOutlined'
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined'
import FlagIcon from '@material-ui/icons/Flag'
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle'
import { Avatar, IconButton } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import ForumIcon from '@material-ui/icons/Forum'
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'
import './Navbar.scss'

export default function Navbar() {
  useEffect(() => {
    const favicon = document.getElementById('favicon')
    favicon.href = 'https://static.xx.fbcdn.net/rsrc.php/yD/r/d4ZIVX-5C-b.ico'
    document.title = 'Facebook'
    document.body.style.overflowY = 'scroll'
  }, [])

  return (
    <div className='navbar'>
      <div className='navbar__left'>
        <Link to='/'>
          <svg viewBox='0 0 36 36' className='navbar__left__logo' fill='url(#jsc_s_2)' height='40' width='40'>
            <defs>
              <linearGradient x1='50%' x2='50%' y1='97.0782153%' y2='0%' id='jsc_s_2'>
                <stop offset='0%' stop-color='#0062E0'></stop>
                <stop offset='100%' stop-color='#19AFFF'></stop>
              </linearGradient>
            </defs>
            <path d='M15 35.8C6.5 34.3 0 26.9 0 18 0 8.1 8.1 0 18 0s18 8.1 18 18c0 8.9-6.5 16.3-15 17.8l-1-.8h-4l-1 .8z'></path>
            <path
              fill='white'
              d='M25 23l.8-5H21v-3.5c0-1.4.5-2.5 2.7-2.5H26V7.4c-1.3-.2-2.7-.4-4-.4-4.1 0-7 2.5-7 7v4h-4.5v5H15v12.7c1 .2 2 .3 3 .3s2-.1 3-.3V23h4z'></path>
          </svg>
        </Link>

        <div className='navbar__left__input'>
          <SearchIcon className='navbar__left__input__icon' />
          <input placeholder='Search Facebook' type='text' />
        </div>
      </div>
      <div className='navbar__middle'>
        <div className='navbar__middle__option navbar__middle__option--active'>
          <HomeIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navbar__middle__option'>
          <BsPeople className='navbar__middle__option__icon' />
        </div>

        <div className='navbar__middle__option'>
          <SubscriptionsOutlinedIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navbar__middle__option'>
          <StorefrontOutlinedIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navbar__middle__option'>
          <SupervisedUserCircleIcon className='navbar__middle__option__icon' />
        </div>
      </div>
      <div className='navbar__right'>
        <div className='navbar__right__info'>
          <Avatar className='navbar__right__info__avatar' />
          <h4>William Simms</h4>

          <IconButton>
            <AddIcon className='navbar__right__icon' />
          </IconButton>

          <IconButton>
            <ForumIcon className='navbar__right__icon' />
          </IconButton>

          <IconButton>
            <NotificationsActiveIcon className='navbar__right__icon' />
          </IconButton>

          <IconButton>
            <ExpandMoreIcon className='navbar__right__icon' />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
