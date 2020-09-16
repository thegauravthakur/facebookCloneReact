import React from 'react'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import StorefrontIcon from '@material-ui/icons/Storefront'
import ChatIcon from '@material-ui/icons/Chat'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'
import './Sidebar.scss'
import SidebarRow from './SidebarRow'

export default function Sidebar() {
  return (
    <div className='sidebar`'>
      <SidebarRow
        src='https://pbs.twimg.com/profile_images/1277454851195179009/-p_CRLYU_400x400.jpg'
        title='William Simms'
      />
      <SidebarRow Icon={} title='' />
      <SidebarRow Icon={} title='' />
      <SidebarRow Icon={} title='' />
      <SidebarRow Icon={} title='' />
      <SidebarRow Icon={} title='' />
      <SidebarRow Icon={} title='' />
      <SidebarRow Icon={} title='' />
    </div>
  )
}
