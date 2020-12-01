import React, { createContext, useState } from 'react'

const { Consumer, Provider } = createContext()

const ProviderState = ({ children }) => {
  const [user, setUser] = useState({})
  const updateUser = data => setUser(data)
  return (
    <Provider value={{user, updateUser}}>
      { children }
    </Provider>
  )
}

const ContextProvider = Component => props => (
  <Consumer>
    {
      (state) => <Component
        {...props}
        {...state}
      />
    }
  </Consumer>
)

export {
  ContextProvider,
  ProviderState
} 
