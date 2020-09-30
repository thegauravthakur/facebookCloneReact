import React from 'react'
import { Avatar } from '@material-ui/core'
import onClickOutside from 'react-onclickoutside'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import FeedbackIcon from '@material-ui/icons/Feedback'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import LockIcon from '@material-ui/icons/Lock'
import LanguageIcon from '@material-ui/icons/Language'
import PostAddIcon from '@material-ui/icons/PostAdd'
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice'
import ReportIcon from '@material-ui/icons/Report'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { CSSTransition } from 'react-transition-group'
import './AccountDropDown.scss'

function AccountDropDown(isDropDownOpen, setAccountDropDownOpen) {
  AccountDropDown.handleClickOutside = () => {
    setAccountDropDownOpen(false)
  }

  return (
    <div className='accountDropDown'>
      <div className='accountDropDown__header'>
        <Avatar className='accountDropDown__header__avatar' />
        <div className='accountDropDown__header__content'>
          <h4>William Simms</h4>
          <p>See your Profile</p>
        </div>
      </div>
      <hr className='accountDropDown__line' />
      <div className='accountDropDown__row'>
        <div className='accountDropDown__row__icon__container'>
          <FeedbackIcon className='accountDropDown__row__icon' />
        </div>
        <div className='accountDropDown__row__content'>
          <h4>Give Feedback</h4>
          <p>Help us improve the new Facebook.</p>
        </div>
      </div>

      <hr className='accountDropDown__line' />

      <div className='accountDropDown__row'>
        <div className='accountDropDown__row__icon__container'>
          <SettingsIcon className='accountDropDown__row__icon' />
        </div>
        <div className='accountDropDown__row__content'>
          <h4>Give Feedback</h4>
          <ArrowForwardIosIcon />
        </div>
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => AccountDropDown.handleClickOutside,
}

export default onClickOutside(AccountDropDown)
