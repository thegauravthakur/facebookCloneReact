import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import onClickOutside from 'react-onclickoutside'
import VideoCallIcon from '@material-ui/icons/VideoCall'
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit'
import CreateIcon from '@material-ui/icons/Create'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import SearchIcon from '@material-ui/icons/Search'
import Tip from './Tip'
import MessengerDropDownUser from './MessengerDropDownUser'
import './MessengerDropDown.scss'

function MessengerDropDown({ isDropDownOpen, setMessengerDropDownOpen, iconRef }) {
  const history = useHistory()

  MessengerDropDown.handleClickOutside = () => {
    setMessengerDropDownOpen(false)
    iconRef.current.style.fill = '#000'
    iconRef.current.style.color = '#000'
  }

  return (
    <>
      <div className={`messengerDropDown  ${isDropDownOpen && 'messengerDropDown__Open'}`}>
        <div className='messengerDropDown__container'>
          <div className='messengerDropDown__header'>
            <h4>Messenger</h4>

            <div className='messengerDropDown__header__icons'>
              <div className='messengerDropDown__header__icon__container' onClick={() => history.push('/messenger')}>
                <FullscreenExitIcon className='messengerDropDown__header__icon' />
                <Tip text='See All in Messenger' />
              </div>
              <div className='messengerDropDown__header__icon__container'>
                <VideoCallIcon className='messengerDropDown__header__icon' />
                <Tip text='Create new room' />
              </div>
              <div className='messengerDropDown__header__icon__container'>
                <CreateIcon className='messengerDropDown__header__icon' />

                <Tip text='New message' />
              </div>
              <div className='messengerDropDown__header__icon__container'>
                <MoreHorizIcon className='messengerDropDown__header__icon' />
                <Tip text='Options' />
              </div>
            </div>
          </div>

          <div className='messengerDropDown__search'>
            <SearchIcon className='messengerDropDown__search__icon' />
            <input type='text' className='messengerDropDown__search__input' placeholder='Search Messenger' />
          </div>
          <div className='messengerDropDown__messages'>
            <MessengerDropDownUser
              src='https://pbs.twimg.com/profile_images/1306974440694181888/hym0vVHL_400x400.jpg'
              name='William Simms'
              message='What is up?'
              date='1w'
            />

            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/85.jpg'
              name='David Brown'
              message='I will be there on Monday'
              date='1w'
            />

            <MessengerDropDownUser
              src='https://ichef.bbci.co.uk/images/ic/640x360/p065f270.jpg'
              name='Richard Feynmann'
              message='An atom in the universe.'
              date='2w'
            />

            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/78.jpg'
              name='Johnny George'
              message='Where is yor watch?'
              date='2w'
            />

            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/54.jpg'
              name='Colby Fletcher'
              message='Thanks man.'
              date='2w'
            />

            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/women/33.jpg'
              name='Alyssa Smart'
              message=':)'
              date='3w'
            />
            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/women/84.jpg'
              name='Hannah Potter'
              message='Ok I will be there at 7pm'
              date='4w'
            />
            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/31.jpg'
              name='Jafar Simpson'
              message='Ok No Problem.'
              date='7w'
            />
            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/78.jpg'
              name='Kyle Rose'
              message='React is also my favourite library.'
              date='8w'
            />
            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/52.jpg'
              name='Kenny Jackson'
              message='Are you a fan of typescript as well ?'
              date='10w'
            />
            <MessengerDropDownUser
              src='https://randomuser.me/api/portraits/men/59.jpg'
              name='Dimitri Stepens'
              message='I miss you too bro :('
              date='10w'
            />
            <MessengerDropDownUser
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/SKorolow.jpg/220px-SKorolow.jpg'
              name='Sergei Korlolev'
              message='Every problem is solvable.'
              date='16w'
            />
            <MessengerDropDownUser
              src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/photo-of-elvis-presley-posed-studio-portrait-of-elvis-news-photo-84857388-1552512781.jpg?crop=0.794xw:1.00xh;0.0102xw,0&resize=480:*'
              name='Elvis Presley'
              message='Ambition is a dream with a V8 engine.'
              date='20w'
            />
            <MessengerDropDownUser
              src='https://www.straight.com/files/v3/styles/gs_standard/public/images/15/12/johnlennon.jpg?itok=BdHYhTlk'
              name='John Lennon'
              message='Time you enjoy wasting, was not wasted.'
              date='35w'
            />
            <MessengerDropDownUser
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Dennis_Ritchie_2011.jpg/220px-Dennis_Ritchie_2011.jpg'
              name='Dennis Ritchie'
              message='C is quirky, flawed, and an enormous success.'
              date='40w'
            />
            <MessengerDropDownUser
              src='https://d7hftxdivxxvm.cloudfront.net/?resize_to=width&src=https%3A%2F%2Fartsy-media-uploads.s3.amazonaws.com%2Fgg4GG0NinDYK_oPMGuyYoQ%252FBrian_Kernighan.jpg&width=1200&quality=80'
              name='Brian Kernighan'
              message="Don't comment bad code—rewrite it"
              date='45w'
            />
            <MessengerDropDownUser
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTp5JJC4KNdgs0Xrd5YutQccXusvbQX4OgX7Q&usqp=CAU'
              name='Bjarne Stroustrup'
              message="After all, C++ isn't a perfect match for Java's design aims either."
              date='50w'
            />
            <MessengerDropDownUser
              src='https://www.kyotoprize.org/wp-content/uploads/2019/07/th_1996_a_knuth.jpg'
              name='Donald Knuth'
              message='An algorithm must be seen to be believed.'
              date='51w'
            />
            <MessengerDropDownUser
              src='https://res-2.cloudinary.com/theymadethat/image/upload/v1552075142/person/oyhgcogd51jyckzysc2t.jpg'
              name='Ken Thompson'
              message="You can't trust code that you did not totally create yourself."
              date='51w'
            />
            <MessengerDropDownUser
              src='https://www.nobelprize.org/images/schrodinger-12988-content-portrait-mobile-tiny.jpg'
              name='Erwin Schrödinger'
              message='Consciousness cannot be accounted for in physical terms. '
              date='1y'
            />
            <MessengerDropDownUser
              src='https://www.kyotoprize.org/wp-content/uploads/2019/07/th_1996_a_knuth.jpg'
              name='Donald Knuth'
              message='An algorithm must be seen to be believed.'
              date='20w'
            />
            <MessengerDropDownUser
              src='https://media.wired.com/photos/59327c782a990b06268ab0b1/master/pass/john-mccarthy.png'
              name='John McCarthy'
              message='He who refuses to do arithmetic is doomed to talk nonsense'
              date='2y'
            />
            <MessengerDropDownUser
              src='https://www.energy.gov/sites/prod/files/styles/borealis_article_hero_respondmedium/public/tesla_portrait_0.jpeg?itok=5NIZOJYP'
              name='Nikola Tesla'
              message='The present is theirs; the future, for which I really worked, is mine.'
              date='3y'
            />
          </div>
        </div>
      </div>

      <div className={`messengerDropDown__footer ${isDropDownOpen && 'messengerDropDown__footer__Open'}`}>
        <Link to='/messenger'>See All in Messenger</Link>
      </div>
    </>
  )
}

const clickOutsideConfig = {
  handleClickOutside: () => MessengerDropDown.handleClickOutside,
}

export default onClickOutside(MessengerDropDown, clickOutsideConfig)
