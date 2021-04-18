import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import PrivateRouteCliente from './PrivateRouteClient'
import Landing from '../pages/Landing'

import Cliente_SignIn from '../pages/auth/Cliente_SignIn'
import Cliente_SignUp from '../pages/auth/Cliente_SignIn'
import Cliente_SignInTwo from '../pages/auth/Cliente_signin2'
import Barbeiro_SignIn from '../pages/auth/Barbeiro_SignIn'
import TemplateBarbeiroSignUp from '../pages/TemplateBarbeiroSignup'
import HomeClients from '../pages/HomeClients'
import PlusBarbers from '../pages/PlusBarbers'

import PageAdmCliente from '../pages/PageAdmCliente'
import TesteLocalStorage from '../pages/TesteLocalStorage'
import PageChoice from '../pages/PageChoice'
import Calendario from '../pages/TesteCalendar'
const Routes = () => {
  return (
    
    <BrowserRouter>
      <Switch>
        <Route path="/teste" exact component={TesteLocalStorage}/>
        <Route path="/" exact component={Landing} />
        <Route path="/cliente/signin" exact component={Cliente_SignIn} />
        <Route path="/cliente/signup" exact component={Cliente_SignUp} />
        <Route path="/barbeiro/signin" exact component={Barbeiro_SignIn} />
        <Route path="/barbeiro/term" exact component={TemplateBarbeiroSignUp} />
        <Route path="/home/clients" exact component={HomeClients}/>
        <Route path="/barbers/plus/:id" exact component={PlusBarbers} />
        <Route path="/clientes/choice" exact component={PageChoice}/>
        <PrivateRouteCliente path="/adm/cliente" exact component={PageAdmCliente} />
        <Route path="/clientes/signin" exact component={Cliente_SignInTwo}/>
        <Route path="/calendar" exact component={Calendario}/>

      </Switch>
    </BrowserRouter>
  )
}
export default Routes