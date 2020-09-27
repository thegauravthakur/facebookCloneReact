import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './ToolTip.scss'

function ToolTip() {
  return (
    <div className='tooltip'>
      <ArrowRightIcon className='tooltip__arrow' />
      <div className='tooltip__info'></div>
      <hr className='tooltip__line' />
      <div className='tooltip__button'></div>
    </div>
  )
}

export default ToolTip
