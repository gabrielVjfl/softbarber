import React, {useEffect, useContext, Component} from 'react'


import Axios from 'axios'

import { ClienteContext } from '../global/context/Action'


import {useHistory} from 'react-router-dom'

// : ElementType
export default function PersistentCliente(WrappedComponent:any) {
  const Wrapper = (props) => {

    const {dispatch: userDispatch} = useContext(ClienteContext)
    
      const history = useHistory()

      useEffect(() => {
   
        let res = sessionStorage.getItem('data')
        let resToken = sessionStorage.getItem('token')
    
        if(res && resToken) {
    
        let json = JSON.parse(res)
        let mytoken = JSON.parse(resToken)

    
        Axios.defaults.headers.Authorization = `Bearer ${mytoken}`
    
        userDispatch({
            type: 'SETauth',
            payload: {
                auth: sessionStorage.getItem('token')
            }
        })
        userDispatch({
            type: 'SETtoken',
            payload: {
                token: mytoken
            }
        })
    
    
        userDispatch({
            type: 'SETdados',
            payload: {
                dados: json
            }
        })
    
        }
        else {
            history.push('/cliente/signin')
        }
    }, [])
    


      return <WrappedComponent {...props}/>
    }
    return Wrapper
  }
