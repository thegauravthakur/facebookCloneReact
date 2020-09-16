import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'

function App() {
  return (
    <div className='app'>
      <Navbar />

      <div className='app__body'>
        <Sidebar />
        <Feed />
      </div>
    </div>
  )
}

export default App
