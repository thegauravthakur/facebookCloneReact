import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import onClickOutside from 'react-onclickoutside'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import FeedbackIcon from '@material-ui/icons/Feedback'
import SettingsIcon from '@material-ui/icons/Settings'
import HelpIcon from '@material-ui/icons/Help'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted'
import LockIcon from '@material-ui/icons/Lock'
import EnhancedEncryptionIcon from '@material-ui/icons/EnhancedEncryption'
import LanguageIcon from '@material-ui/icons/Language'
import PostAddIcon from '@material-ui/icons/PostAdd'
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice'
import ReportIcon from '@material-ui/icons/Report'
import ChatBubbleIcon from '@material-ui/icons/ChatBubble'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import { CSSTransition } from 'react-transition-group'
import Checkbox from './Checkbox'
import './AccountDropDown.scss'

function AccountDropDown(isDropDownOpen, setAccountDropDownOpen) {
  AccountDropDown.handleClickOutside = () => {
    setAccountDropDownOpen(false)
  }

  const [activeMenu, setActiveMenu] = useState('main')

  return (
    <>
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames='menu-primary'>
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

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <SettingsIcon className='accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Settings & Privacy</h4>
              <ArrowForwardIosIcon className='accountDropDown__row__content__arrow' />
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <HelpIcon className='accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Help & Support</h4>
              <ArrowForwardIosIcon className='accountDropDown__row__content__arrow' />
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <Brightness3Icon className='accountDropDown__row__icon accountDropDown__row__icon__darkmode' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Dark Mode</h4>
              <Checkbox />
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <ExitToAppIcon className='accountDropDown__row__icon accountDropDown__row__icon__darkmode' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Log Out</h4>
            </div>
          </div>

          <div className='accountDropDown__footer'>
            <p className='accountDropDown__footer__text'>
              Privacy &#8729; Terms &#8729; Advertising &#8729; Ad Choices &#8729; Cookies &#8729;
            </p>
            <p className='accountDropDown__footer__text'>More &#8729; Facebook &copy; 2020</p>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'settings'} unmountOnExit timeout={500} classNames='menu-settings'>
        <div className='accountDropDown'>
          <div className='accountDropDown__header accountDropDown__header__settings'>
            <div className='accountDropDown__header__back__icon__container '>
              <ArrowBackIcon className='accountDropDown__header__back__icon' />
            </div>

            <div className='accountDropDown__header__content'>
              <h4 className='accountDropDown__header__settings__text'>Settings & Privacy</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <SettingsIcon className='accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Settings</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <EnhancedEncryptionIcon className='accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Privacy Checkup</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <LockIcon className='accountDropDown__row__icon accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Privacy Shortcuts</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <FormatListBulletedIcon className='accountDropDown__row__icon accountDropDown__row__icon__darkmode' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Activity Log</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <PostAddIcon className='accountDropDown__row__icon accountDropDown__row__icon__darkmode' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>News Feed Preferences</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <LanguageIcon className='accountDropDown__row__icon accountDropDown__row__icon__darkmode' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Language</h4>
            </div>
          </div>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'help'} unmountOnExit timeout={500} classNames='menu-help'>
        <div className='accountDropDown'>
          <div className='accountDropDown__header accountDropDown__header__settings'>
            <div className='accountDropDown__header__back__icon__container '>
              <ArrowBackIcon className='accountDropDown__header__back__icon' />
            </div>

            <div className='accountDropDown__header__content'>
              <h4 className='accountDropDown__header__settings__text'>Help & Support</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <HelpIcon className='accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Help Center</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <ChatBubbleIcon className='accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Help Community</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <LocalPostOfficeIcon className='accountDropDown__row__icon accountDropDown__row__icon' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Support Inbox</h4>
            </div>
          </div>

          <div className='accountDropDown__row accountDropDown__row__secondary'>
            <div className='accountDropDown__row__icon__container'>
              <ReportIcon className='accountDropDown__row__icon accountDropDown__row__icon__darkmode' />
            </div>
            <div className='accountDropDown__row__content accountDropDown__row__content__secondary'>
              <h4>Report a Problem</h4>
            </div>
          </div>
        </div>
      </CSSTransition>
    </>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => AccountDropDown.handleClickOutside,
}

export default onClickOutside(AccountDropDown)
