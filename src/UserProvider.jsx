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
    dispatch({ type: actionTypes.ADD_ERROR, payload: error })
  }

  const removeError = () => {
    dispatch({ type: actionTypes.REMOVE_ERROR })
  }

  return (
    <UserContext.Provider value={{ state, addUser, removeUser, addError, removeError }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
