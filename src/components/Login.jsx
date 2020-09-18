import React from 'react'
import { Button } from '@material-ui/core'
import './Login.scss'
import { auth, db } from '../firebase'
import firebase from 'firebase'
import { useStateValue } from '../StateProvider'
import { actionTypes } from '../reducer'

export default function Login() {
  const provider = new firebase.auth.GoogleAuthProvider()

  const [state, dispatch] = useStateValue()

  console.log(db)
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        })
      })
      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='login'>
      <div className='login__logo'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo_%282019%29.svg.png'
          alt=''
        />
        <img src='https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg' alt='' />

        <Button className='login__logo__button' onClick={signIn}>
          Sign In
        </Button>
      </div>
    </div>
  )
}
