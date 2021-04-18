import React,{useEffect, useState} from 'react'
import {Container, TemplateLeft, TemplateRight} from '../../styles/Style1'
import Home from '../../assets/home.jpg'
import Logo from '../../assets/softbarber.png'
import '../../styles/barbeiro/style_signin.css'

import * as Yup from 'yup'

import {Link} from 'react-router-dom'

const BarbeiroSignIn = () => {

  const schema = Yup.object().shape({
    email: Yup.string().required('Email está vázio').email(),
    password: Yup.string().required('Senha vázia')
  })

  return (
    <Container>
      <div className="template_left_barber">
        <img src={Logo} loading="lazy" height="200px" width="200px" />
        <span className="text_signin">Olá Barbeiro! Faça o seu login ou <Link to="/barbeiro/term">
       <p style={{ color: 'yellow', textDecoration: 'underline' }}>Cadastre-se</p></Link>
        </span>

        <div className="template_inputs">
         <form>
           <label>Email</label>
         <br/>
          <input id="email" type="email" name="email" autoFocus={true} className="form-control" placeholder="Digite o seu email"/>
            <br />
            <label>Senha</label>
            <br />
      
            <input name="password" id="password" type="password" className="form-control" placeholder="Digite a sua senha secreta"/>
          <br />

          <button className="btn_signin">
               Entrar
            </button>
            </form>
          </div>

      </div>

      <div className="template_right_barber">

      </div>
      
   </Container>
  )
}
export default BarbeiroSignIn