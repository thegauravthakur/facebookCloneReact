import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './BirthdayToolTip.scss'

function ToolTip() {
  return (
    <div className='tooltip'>
      <ArrowRightIcon className='tooltip__arrow' />
      <div className='tooltip__info'>
        <p>
          <span className='tooltip__info__bold'>Providing your birthday</span> helps make sure you get the right
          Facebook experience for your age. If you want to change who sees this, go to the About section of your
          profile. For more details, please visit our <span className='tooltip__info__blue'>Data Policy</span>.
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
