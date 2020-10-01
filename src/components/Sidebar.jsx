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
    </div>
  )
}
