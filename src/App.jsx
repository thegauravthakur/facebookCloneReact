import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useStateValue } from './StateProvider'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Messenger from './pages/Messenger'

function App() {
  const [{ user }, dispatch] = useStateValue()
  console.log(user)

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/messenger'>
            <Messenger />
          </Route>

          <Route path='/'>
            {!user ? (
              <Login />
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
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
