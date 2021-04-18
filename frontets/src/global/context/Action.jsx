import React, {createContext, useReducer} from 'react'


import {ClienteReducer, Initial_State} from './Reducer'



export const ClienteContext = createContext()

export default ({children}) => {

   

    const [state, dispatch] = useReducer(ClienteReducer, Initial_State)

    return (
        <ClienteContext.Provider value={{state, dispatch}}>
            {children}
        </ClienteContext.Provider>
    )
}