import React, { createContext, useReducer, useContext } from 'react'

export const UserContext = createContext()

export const StateProvider = ({ children }) => {
  return <UserContext.Provider>{children}</UserContext.Provider>
}
