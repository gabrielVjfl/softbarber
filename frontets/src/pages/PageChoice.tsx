import React from 'react'

import '../styles/clients/choice.css'
import logo from '../assets/softbarber.png'
import { Link } from 'react-router-dom'
import {FaSearch, FaClipboardList} from 'react-icons/fa'


const PageChoice = () => {
  return (
    <div className="container_choice">
      <img loading="lazy" src={logo} style={{ marginTop: '4vh' }} width="200px" height="200px"></img>
      
      <span className="title_choice">O que você deseja?</span>

      <Link to="/adm/cliente">
        <button id="btnchoice1" className="btn btn-primary">Ver meus agendamentos
        <FaClipboardList style={{marginLeft: '1vw'}} size={24} color="white"/>
        </button>
      </Link>


      <Link to="/home/clients">
        <button id="btnchoice2" className="btn btn-warning">Procurar Barbeiros
          <FaSearch style={{marginLeft: '1vw'}} size={22} color="white"/>
        </button>
      </Link>
    
    </div>
  )
}
export default PageChoice