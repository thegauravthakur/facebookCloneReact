import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Application from './Application'
import { UserProvider } from './UserProvider'

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <Application />
    </UserProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
