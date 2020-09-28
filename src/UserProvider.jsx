import React, { createContext, useReducer } from 'react'
import reducer, { initialState, actionTypes } from './reducer'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addUser = (user) => {
    dispatch({ type: actionTypes.ADD_USER, payload: user })
  }

  const removeUser = () => {
    dispatch({ type: actionTypes.REMOVE_USER })
  }

  const addError = (error) => {
    dispatch({ type: actionTypes.REMOVE_USER, payload: error })
  }

  const removeError = () => {
    dispatch({ type: actionTypes.REMOVE_USER })
  }

  return (
    <UserContext.Provider value={{ state, addUser, removeUser, addError, removeError }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
