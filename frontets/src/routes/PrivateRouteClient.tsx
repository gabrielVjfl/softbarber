import React, { useContext} from 'react'

import { Route, Redirect } from 'react-router-dom'
import { ClienteContext } from '../global/context/Action'


const PrivateRouteCliente = ({component: Component, ...rest}) => {

  const {state} = useContext(ClienteContext)

  //let json = sessionStorage.getItem('medicoToken')

 // let resData = JSON.parse(json)
  
  return (
  <Route {...rest} render={props => (
      state.auth ? (
          <Component {...props}/>

      ) : (
          <Redirect to={{pathname: '/cliente/signin', state: {from: props.location}}}/>
      )
  )}/>
  )
      }

export default PrivateRouteCliente