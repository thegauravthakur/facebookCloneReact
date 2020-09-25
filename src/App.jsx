import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './components/Login'
import { useStateValue } from './StateProvider'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
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

          <Route path='/login'>
            <Login />
          </Route>

          <Route path='/'>
            {!user ? (
              <Redirect to='/login' />
            ) : (
              <Redirect>
                <Navbar />
                <div className='app__body'>
                  <Sidebar />
                  <Feed />
                  <Widgets />
                </div>
              </Redirect>
            )}
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
