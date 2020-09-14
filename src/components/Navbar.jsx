import React from 'react'
import SearchIcon from '@material-ui/icons/Search'
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
      <div className='navbar__middle'>
        <div className='navbar__middle__option'>
          <HomeIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navabr__middle__option'>
          <FlagIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navabr__middle__option'>
          <SubscriptionsOutlinedIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navabr__middle__option'>
          <StorefrontOutlinedIcon className='navbar__middle__option__icon' />
        </div>

        <div className='navabr__middle__option'>
          <SupervisedUserCircleIcon className='navbar__middle__option__icon' />
        </div>
      </div>
      <div className='navbar__right'>
        <div className='navbar__info'>
          <Avatar />
          <h4>William</h4>

          <IconButton>
            <AddIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}
