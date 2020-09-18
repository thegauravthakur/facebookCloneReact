import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'

function App() {
  const user = 1

  return (
    <div className='app'>
      {!user ? (
        <h1>Login</h1>
      ) : (
        <>
          <Navbar />

          <div className='app__body'>
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        </>
      )}
    </div>
  )
}

export default App
