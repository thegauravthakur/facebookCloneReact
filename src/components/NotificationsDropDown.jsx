import React from 'react'
import onClickOutside from 'react-onclickoutside'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import Notification from './DropDownNotification'
import CakeIcon from '@material-ui/icons/Cake'
import GroupIcon from '@material-ui/icons/Group'
import PostAddIcon from '@material-ui/icons/PostAdd'
import NotificationsIcon from '@material-ui/icons/Notifications'
import VideocamIcon from '@material-ui/icons/Videocam'
import './NotificationsDropDown.scss'

function NotificationsDropDown({ isDropDownOpen, setNotificationsDropDownOpen, iconRef }) {
  NotificationsDropDown.handleClickOutside = () => {
    setNotificationsDropDownOpen(false)
    iconRef.current.style.fill = '#000'
    iconRef.current.style.color = '#000'
  }
  return (
    <div className={`notificationsDropDown ${isDropDownOpen && 'notificationsDropDown__Open'}`}>
      <div className='notificationsDropDown__container'>
        <div className='notificationsDropDown__header'>
          <h4>Notifications</h4>
          <div className='notificationsDropDown__header__icon__container'>
            <MoreHorizIcon className='notificationsDropDown__header__icon' />
          </div>
        </div>

        <h5>New</h5>
        <Notification
          src='https://scontent.fkin1-1.fna.fbcdn.net/v/t1.0-1/26730708_2070665992947987_4628084898152829584_n.png?_nc_cat=1&_nc_sid=1eb0c7&_nc_ohc=KL4wdH69K3kAX-MNCIP&_nc_ht=scontent.fkin1-1.fna&oh=d0819f663216787847b745aa95a07645&oe=5F991B08'
          color='#EB5872'
          notification='Sky News is live now: Watch Live Prime Minister Boris Johnson.'
          time='20 minutes ago'
          Icon={VideocamIcon}
        />
        <Notification
          src='https://pbs.twimg.com/profile_images/1306974440694181888/hym0vVHL_400x400.jpg'
          color='#1DA0ED'
          notification='William Simms posted in JavaScript Developers.'
          time='50 minutes ago'
          Icon={GroupIcon}
        />
        <Notification
          src='https://randomuser.me/api/portraits/men/85.jpg'
          color='#E94DA8'
          notification="David Brown's birthday was yesterday."
          time='10 hours ago'
          Icon={CakeIcon}
        />
        <Notification
          src='https://ichef.bbci.co.uk/images/ic/640x360/p065f270.jpg'
          color='#1DA0ED'
          notification='Richard Feynmann added a new photo.'
          time='12 hours ago'
          Icon={PostAddIcon}
        />

        <h5>Earlier</h5>

        <Notification
          src='https://randomuser.me/api/portraits/women/33.jpg'
          color='#1DA0ED'
          notification="Alyssa Smart shared Microsoft's Post. "
          time='18 hours ago'
          Icon={PostAddIcon}
        />
        <Notification
          src='https://randomuser.me/api/portraits/men/54.jpg'
          color='#1DA0ED'
          notification='Colby Fletcher posted an update.'
          time='23 hours ago'
          Icon={PostAddIcon}
        />
        <Notification
          src='https://randomuser.me/api/portraits/men/79.jpg'
          color='#55595E'
          notification='You have a new friend suggestion: Patrick Gardner.'
          time='a day ago'
          Icon={NotificationsIcon}
        />
        <Notification
          src='https://randomuser.me/api/portraits/women/84.jpg'
          color='#1DA0ED'
          notification='Hannah Potter shared your photo.'
          time='3 days ago'
          Icon={PostAddIcon}
        />
        <Notification
          src='https://randomuser.me/api/portraits/men/59.jpg'
          color='#E94DA8'
          notification="Dimitri Stephens' birthday was 6 days ago"
          time='6 days ago'
          Icon={CakeIcon}
        />
        <Notification
          src='https://media.wired.com/photos/59327c782a990b06268ab0b1/master/pass/john-mccarthy.png'
          color='#1DA0ED'
          notification='John McCarthy posted an update.'
          time='a week ago'
          Icon={PostAddIcon}
        />
        <Notification
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Facebook_logo_36x36.svg/600px-Facebook_logo_36x36.svg.png'
          color='#55595E'
          notification="There's an update to the Terms of Service."
          time='6 weeks ago'
          Icon={NotificationsIcon}
        />
        <Notification
          src='https://www.nobelprize.org/images/schrodinger-12988-content-portrait-mobile-tiny.jpg'
          color='#1DA0ED'
          notification='Erwin Schrödinger added a new photo.'
          time='10 weeks ago'
          Icon={PostAddIcon}
        />
        <Notification
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/220px-Dennis_Ritchie_2011.jpg'
          color='#EB5872'
          notification='Dennis Ritchie is now live.'
          time='30 weeks ago'
          Icon={VideocamIcon}
        />
      </div>
    </div>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => NotificationsDropDown.handleClickOutside,
}

export default onClickOutside(NotificationsDropDown, clickOutsideConfig)
