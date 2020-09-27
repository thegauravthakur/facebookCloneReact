import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './ErrorNotification.scss'

function ErrorNotification({ text }) {
  return (
    <div className='errorNotification'>
      <p>{text}</p>
      <ArrowRightIcon className='errorNotification__arrow' />
    </div>
  )
}

export default ErrorNotification
