import React from 'react'
import ReactDOM from 'react-dom'
import { IconContext } from 'react-icons'
import './index.scss'
import Application from './Application'
import { UserProvider } from './UserProvider'

ReactDOM.render(
  <React.StrictMode>
    <IconContext.Provider value={{ style: { color: 'gray' } }}>
      <UserProvider>
        <Application />
      </UserProvider>
    </IconContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
