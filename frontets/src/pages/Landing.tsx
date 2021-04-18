import React from 'react'
import '../styles/clients/style_landing.css'
import { Container} from '../styles/Style1'
import {FaCut, FaUser} from 'react-icons/fa'
import landing from '../assets/landing.png'
import logo from '../assets/softbarber.png'
import {Link} from 'react-router-dom'
import mustache from '../assets/sunglasses.svg'

const Landing = () => {
  return (
   
      <div className="container_landing">
      <img src={logo} style={{marginTop: '10vh'}} width="250px" height="250px"></img>
      
      <span className="title_landing">Você é ? </span>

      <div className="template_buttons">
        <Link to="/barbeiro/signin"><button
          className="btn_barbeiro">Barbeiro  <FaCut size={22} color="white" />
        </button></Link>
        <img src={mustache} className="mustache"  />
        
        <Link to="/clientes/choice">
          <button className="btn_cliente">Cliente <FaUser size={22} color="white" />
          </button></Link>
      </div>
   

     </div>
  )
}
export default Landing