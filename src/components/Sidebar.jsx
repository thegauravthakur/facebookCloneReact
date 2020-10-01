import React from 'react'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import './Sidebar.scss'
import SidebarRow from './SidebarRow'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow title={'William Simms'} src='' userRow />
      <SidebarRow
        image='https://static.xx.fbcdn.net/rsrc.php/v3/yB/r/squBo4GNUfh.png'
        title='COVID-19 Information Center'
      />
      <SidebarRow image='https://static.xx.fbcdn.net/rsrc.php/v3/yx/r/-XF4FQcre_i.png' title='Friends' />
      <SidebarRow image='https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/mk4dH3FK0jT.png' title='Groups' />
      <SidebarRow image='https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/A1HlI2LVo58.png' title='Videos' />
      <SidebarRow image='https://static.xx.fbcdn.net/rsrc.php/v3/yv/r/QAyfjudAqqG.png' title='Events' />
      <SidebarRow image='https://static.xx.fbcdn.net/rsrc.php/v3/yf/r/GA7Y4WRJMp8.png' title='Memories' />
      <SidebarRow image='https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/2uPlV4oORjU.png' title='Saved' />
      <SidebarRow Icon={ExpandMoreRoundedIcon} title='See More' />

      <hr className='sidebar__line' />

      <h3 className='sidebar__shortcut__text'>Your Shortcuts</h3>

      <SidebarRow image='https://react-redux.js.org/img/redux-logo-twitter.png' title='Redux Developers' shortcut />
      <SidebarRow
        image='https://ostrowski.ninja/static/1482fb398d82ef51cfcfdbcd55e1ec03/a26eb/ts.png'
        title='Typescript Developers'
        shortcut
      />

      <SidebarRow
        image='https://raw.githubusercontent.com/isocpp/logos/master/cpp_logo.png'
        title='C++ Developers'
        shortcut
      />

      <div className='sidebar__footer'>
        <p>
          <span>Privacy</span> &#8729; <span>Terms</span> &#8729; <span>Advertising</span> &#8729;{' '}
          <span>Ad Choices</span> &#8729; <span>Cookies</span> &#8729;
        </p>
        <p>
          <span>More</span> &#8729; Facebook &copy; 2020
        </p>
      </div>
    </div>
  )
}
