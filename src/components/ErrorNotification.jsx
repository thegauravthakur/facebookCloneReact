import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './ErrorNotification.scss'

function ErrorNotification({ text, lastName, email }) {
  return (
    <div
      className={`errorNotification ${lastName && 'errorNotification__lastName'} ${
        email && 'errorNotification__email'
      }`}>
      <p>{text}</p>
      <ArrowRightIcon className='errorNotification__arrow' />
    </div>
  )
}

export default ErrorNotification
