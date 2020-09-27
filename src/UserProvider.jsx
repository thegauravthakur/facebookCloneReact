import React, { createContext, useReducer, useContext } from 'react'
import reducer, { initialState } from './reducer'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const addUser = (user) => {}

  const removeUser = () => {
    dispatch({type:})
  }

  return <UserContext.Provider>{children}</UserContext.Provider>
}
