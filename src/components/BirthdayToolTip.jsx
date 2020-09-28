import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './BirthdayToolTip.scss'

function BirthdayToolTip({ toolTipOpen, closeToolTip, setBirthdayToolTipOpen }) {
  return (
    <div className={`birthdaytooltip ${toolTipOpen && 'birthdaytooltip__Open'}`}>
      <ArrowRightIcon className='birthdaytooltip__arrow' />
      <div className='birthdaytooltip__info'>
        <p>
          <span className='birthdaytooltip__info__bold'>Providing your birthday</span> helps make sure you get the right
          Facebook experience for your age. If you want to change who sees this, go to the About section of your
          profile. For more details, please visit our <span className='birthdaytooltip__info__blue'>Data Policy</span>.
        </p>
      </div>
      <hr className='birthdaytooltip__line' />
      <div className='birthdaytooltip__footer'>
        <button onClick={() => closeToolTip(setBirthdayToolTipOpen)} className='birthdaytooltip__footer__button'>
          Close
        </button>
      </div>
    </div>
  )
}

export default BirthdayToolTip
