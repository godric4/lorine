import React, { useContext, useReducer } from 'react'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'
import reducer from '../reducers/utils_reducer'

const initialState = {
  isSidebarOpen: false,
}

export const UtilsContext = React.createContext()

export const UtilsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const openSidebar = () => {
    dispatch({ type: SIDEBAR_OPEN })
  }
  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE })
  }

  return (
    <UtilsContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </UtilsContext.Provider>
  )
}
