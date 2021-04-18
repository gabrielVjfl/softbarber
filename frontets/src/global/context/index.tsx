import React from 'react'

import { ClienteProvider } from './Context'

const GlobalContext = ({ children }) => {
  return <ClienteProvider>{ children }</ClienteProvider>
}
export default GlobalContext