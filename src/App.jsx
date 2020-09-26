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
import LoginFail from './components/LoginFail'
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

          <Route path='/login'>
            <LoginFail />
          </Route>

          <Route path='/home'>
            {!user ? (
              <Redirect to='/' />
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

          <Route path='/' exact>
            <Login />
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
