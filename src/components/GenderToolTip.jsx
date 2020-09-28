import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './GenderToolTip.scss'

function GenderToolTip() {
  return (
    <div className='gendertooltip'>
      <ArrowRightIcon className='gendertooltip__arrow' />
      <div className='gendertooltip__info'>
        <p>
          You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd
          rather not say.
        </p>
      </div>
      <hr className='gendertooltip__line' />
      <div className='gendertooltip__footer'>
        <button className='gendertooltip__footer__button'>Close</button>
      </div>
    </div>
  )
}

export default GenderToolTip
