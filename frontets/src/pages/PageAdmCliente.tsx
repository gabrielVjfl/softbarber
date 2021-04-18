import React, { useEffect, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { ClienteContext } from '../global/context/Action'


import PersistentCliente from '../services/PersistentClientes'
import {
  Container,
  SideBar,
  SideBarHeader,
  Content, ContentMain,
  UL,LI
} from '../styles/AdmStyleClient'

import Navbar from '../components/Navbar'

import SideBarCp from '../components/SideBarClient'

const PageAdmCliente = () => {

  const {state:state} = useContext(ClienteContext)


  return (
    <Container>

   <SideBarCp/>

      <Content>
        <Navbar
          title={state.dados.name} nome={state.dados.name} image={state.dados.avatar} />
        <div className="container-fluid">
          <ContentMain>

          </ContentMain>
        </div>
      </Content>
    </Container>
  )
}
export default PersistentCliente(PageAdmCliente)