import React, {useContext} from 'react'
import {
  Container,
  SideBar,
  SideBarHeader,
  Content, ContentMain,
  UL,LI
} from '../styles/AdmStyleClient'

import Badge from '@material-ui/core/Badge'

import {
  FaUser, FaClipboardList, FaCut, FaHistory,
 FaSignOutAlt,
 FaSign
} from 'react-icons/fa'

import Axios from 'axios'

import { ClienteContext } from '../global/context/Action'



const SideBarCp = () => {

  const { dispatch:dispatch } = useContext(ClienteContext)
  

  return (
    <Container>
        <SideBar>
        <UL>
 
            <LI>
            <Badge badgeContent={4} color="primary">
              <FaClipboardList title="Agendamentos" size={24} color="white" />
              </Badge>
            </LI>
      
          <LI><FaCut title="Barbeiros" size={24} color="white" /></LI>
          <LI><FaHistory title="Histórico" size={24} color="white" /></LI>
          <LI><FaUser title="Meu Perfil" size={24} color="white" /></LI>
          <LI><FaSignOutAlt title="Deslogar" size={24} color="white"/></LI>
        </UL>
      </SideBar>

    </Container>
  ) 
}
export default SideBarCp