import React, { useContext, useReducer } from 'react'
import reducer from '../reducers/utils_reducer'
import { SIDEBAR_OPEN, SIDEBAR_CLOSE } from '../actions'


const initialState = {
 isSidebarOpen: false,
}

const UtilsContext = React.createContext()

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

export const useUtilsContext = () => {
 return useContext(UtilsContext)
}
