import React from 'react'
import CreateRoundedIcon from '@material-ui/icons/CreateRounded'
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded'
import EmojiEventsRoundedIcon from '@material-ui/icons/EmojiEventsRounded'
import FlagIcon from '@material-ui/icons/Flag'
import GroupRoundedIcon from '@material-ui/icons/GroupRounded'
import DateRangeRoundedIcon from '@material-ui/icons/DateRangeRounded'
import onClickOutside from 'react-onclickoutside'
import './CreateDropDown.scss'

function CreateDropDown({ isDropDownOpen, setCreateDropDownOpen, iconRef }) {
  CreateDropDown.handleClickOutside = () => {
    setCreateDropDownOpen(false)
    iconRef.current.style.fill = '#000'
    iconRef.current.style.color = '#000'
  }

  return (
    <div className={`createDropDown ${isDropDownOpen && 'createDropDown__Open'}`}>
      <div className='createDropDown__container'>
        <h4>Create</h4>

        <div className='createDropDown__option'>
          <div className='createDropDown__option__icon__container'>
            <CreateRoundedIcon className='createDropDown__option__icon' />
          </div>

          <div className='createDropDown__option__text'>
            <h5>Post</h5>
            <p>Share a post on News Feed.</p>
          </div>
        </div>

        <div className='createDropDown__option'>
          <div className='createDropDown__option__icon__container'>
            <MenuBookRoundedIcon className='createDropDown__option__icon' />
          </div>

          <div className='createDropDown__option__text'>
            <h5>Story</h5>
            <p>Share a photo or write something.</p>
          </div>
        </div>

        <div className='createDropDown__option'>
          <div className='createDropDown__option__icon__container'>
            <EmojiEventsRoundedIcon className='createDropDown__option__icon' />
          </div>

          <div className='createDropDown__option__text'>
            <h5>Life Event</h5>
            <p>Add a life event to your profile.</p>
          </div>
        </div>

        <hr className='createDropDown__line' />

        <div className='createDropDown__option'>
          <div className='createDropDown__option__icon__container'>
            <FlagIcon className='createDropDown__option__icon' />
          </div>

          <div className='createDropDown__option__text'>
            <h5>Page</h5>
            <p>Connect and share with customers or fans.</p>
          </div>
        </div>

        <div className='createDropDown__option'>
          <div className='createDropDown__option__icon__container'>
            <GroupRoundedIcon className='createDropDown__option__icon' />
          </div>

          <div className='createDropDown__option__text'>
            <h5>Group</h5>
            <p>Connect with people who share your interests.</p>
          </div>
        </div>

        <div className='createDropDown__option'>
          <div className='createDropDown__option__icon__container'>
            <DateRangeRoundedIcon className='createDropDown__option__icon' />
          </div>

          <div className='createDropDown__option__text'>
            <h5>Event</h5>
            <p>Bring people together with a public or private event.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => CreateDropDown.handleClickOutside,
}

export default onClickOutside(CreateDropDown, clickOutsideConfig)
