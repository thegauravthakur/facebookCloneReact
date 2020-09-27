import React from 'react'
import ArrowRightIcon from '@material-ui/icons/ArrowRight'
import './ErrorNotification.scss'

function ErrorNotification({ text, lastName, email, password, birthday, gender }) {
  return (
    <div
      className={`errorNotification ${lastName && 'errorNotification__lastName'} ${
        email && 'errorNotification__email'
      } ${password && 'errorNotification__password'} ${birthday && 'errorNotification__birthday'} ${
        gender && 'errorNotification__gender'
      }`}>
      <p>{text}</p>
      <ArrowRightIcon className='errorNotification__arrow' />
    </div>
  )
}

export default ErrorNotification
