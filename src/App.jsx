import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className='app'>
      <Navbar />

      <div className='app__body'>
        <Sidebar />
      </div>
    </div>
  )
}

export default App
