import React from 'react';
import '../styles/barbeiro/style_template.css'
import Logo from '../assets/softbarber.png'
import {Link} from 'react-router-dom'
const TemplateBarbeiroSignUp = () => {
  return (
    <div className="containerTemplate">
      <Link to="/"><button className="btn btn-warning" id="btn_template_voltar">Voltar</button></Link>
      <div className="card" id="card">
        <div className="card-body" id="card-body">
          <img src={Logo} id="imgTemplate" />
          <span id="text1template">Promoção Pacote SoftBarber</span>
          <span id="text2template">R$ 729.90 a vista - ou 10x de R$ 79.90</span>
          <br />
          <button className="btn btn-success">Comprar Agora!!</button>
          <br />
          <button className="btn btn-primary">Quero saber mais</button>
        </div>
      </div>
  </div>
  )
}
export default TemplateBarbeiroSignUp