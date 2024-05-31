import { React, createContext, useContext, useState } from 'react'

const StateContext = createContext()

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
}

export const ContextProvider = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true)
  const [isClicked, setIsClick] = useState(initialState)
  const [screenSize, setScreenSize] = useState(undefined)
  const handleClick = (clicked) => {
    setIsClick({ ...initialState, [clicked]: true })
  }
  return (
    <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClick, handleClick, screenSize, setScreenSize }}>
      {children}
    </StateContext.Provider>
  )
}

// eslint-disable-next-line react-hooks/rules-of-hooks
export const useStateContext = () => useContext(StateContext)
