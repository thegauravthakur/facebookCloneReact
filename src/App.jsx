import React from 'react'
import Navbar from './components/Navbar'
import './App.scss'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Widgets from './components/Widgets'
import Login from './pages/Login'
import { useStateValue } from './StateProvider'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Messenger from './pages/Messenger'
import ErrorPage from './pages/ErrorPage'

function App() {
  const [{ user }, dispatch] = useStateValue()

  return (
    <div className='app'>
      <BrowserRouter>
        <Switch>
          <Route path='/messenger'>
            <Messenger />
          </Route>

          <Route path='/home'>
            <Login />
          </Route>

          <Route path='/' exact>
            {!user ? (
              <Redirect to='/home' />
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

          <Route path=''>
            <ErrorPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
