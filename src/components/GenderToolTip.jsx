import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './BirthdayToolTip.scss'

function ToolTip() {
  return (
    <div className='tooltip'>
      <ArrowRightIcon className='tooltip__arrow' />
      <div className='tooltip__info'>
        <p>
          You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd
          rather not say.
        </p>
      </div>
      <hr className='tooltip__line' />
      <div className='tooltip__footer'>
        <button className='tooltip__footer__button'>Close</button>
      </div>
    </div>
  )
}

export default ToolTip
