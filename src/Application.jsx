import React, { useEffect, useContext } from 'react'
import Navbar from './components/Navbar'
import './Application.scss'
import Sidebar from './components/Sidebar'
import Feed from './components/Feed'
import Friends from './components/Friends'
import Login from './pages/Login'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Messenger from './pages/Messenger'
import LoginFail from './components/LoginFail'
import ErrorPage from './pages/ErrorPage'
import ForgotPasswordPage from './pages/ForgotPassword'
import { auth } from './firebase'
import UserContext from './UserProvider'

function Application() {
  const { state, addUser, removeUser } = useContext(UserContext)

  const user = true // !TODO CHANGE BACK TO STATE.USER

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        addUser(authUser)
      } else {
        removeUser()
      }
    })

    return () => {
      unsubscribe()
    }
  }, [])

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

          <Route path='/forgot'>
            <ForgotPasswordPage />
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
                  <Friends />
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

export default Application
