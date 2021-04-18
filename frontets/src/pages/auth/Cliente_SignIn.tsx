import React,{useEffect, useContext, useState, ChangeEvent} from 'react'
import {Container, TemplateLeft, TemplateRight} from '../../styles/Style1'
import Home from '../../assets/home.jpg'
import Logo from '../../assets/softbarber.png'
import '../../styles/clients/style_signin_cliente.css'
import { FaEnvelope, FaKey } from 'react-icons/fa'
import Axios from 'axios'
import {Link} from 'react-router-dom'
import URL from '../../utils/URL'
import {useHistory} from 'react-router-dom'

import { ClienteContext } from '../../global/context/Action'
import Swal from 'sweetalert2'

const ClienteSignIn = () => {

const {dispatch:dispatch} = useContext(ClienteContext)
  

  const history = useHistory()
 

  const [erros, setErros] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  useEffect(() => {
    let myemail = sessionStorage.getItem('email')
    if (myemail) {
      setEmail(myemail)
    }
  }, [])

  useEffect(() => {
    let mypassword = sessionStorage.getItem('password')
    if (mypassword) {
      setPassword(mypassword)
    }
  }, [])

  const [loading, setLoading] = useState(false)


  const HandleSubmit = async(e: ChangeEvent<HTMLFormElement>) => {
    try {
      e.preventDefault()
      setLoading(true)
      let response = await Axios.post(`${URL}/clientes/login`, {
        email: email,
        password:password
      })

      console.log(response)

      if (response.data.token) {
        sessionStorage.setItem('token', JSON.stringify(response.data.token))
        sessionStorage.setItem('data', JSON.stringify(response.data.user))

        let tokenParse = sessionStorage.getItem('token')
        let dataParse = sessionStorage.getItem('data')

        if (tokenParse && dataParse) {
          let mytoken = JSON.parse(tokenParse)
          let mydados = JSON.parse(dataParse)

          Axios.defaults.headers.Authorization = `Bearer ${mytoken}`

          
          dispatch({
            type: 'SETtoken',
            payload: {
              token: mytoken
            }
          })
          dispatch({
            type: 'SETdados',
            payload: {
              dados: mydados
            }
          })

          dispatch({
            type: 'SETauth',
            payload: {
              auth: sessionStorage.getItem('token')
            }
          })
          setLoading(false)
          
          history.push('/adm/cliente')

        }
      }


    }
    catch (err) {
      
      setLoading(false)
      Swal.fire({
        title: 'Ops ocorreu um erro!',
        text: err.response.data.errBackend,
        icon: 'error',
        confirmButtonText: 'Ok'
      })
    }
  }


  return (
    <Container>
      <div className="template_left">
        <img src={Logo} loading="lazy" height="200px" width="200px" />
        <span className="text_signin">Olá! Faça o seu login ou
          <Link to="/cliente/signup">
            <p style={{ color: 'yellow', textDecoration: 'underline' }}>Cadastre-se
            </p></Link></span>

        <div className="template_inputs">
         <form onSubmit={HandleSubmit}>
           <label>Email</label>
         <br/>
          <input type="email"
            autoFocus={true}
            className="form-control"
            placeholder="Digite o seu email"
            required
            value={email}
              onChange={(e) => {
                setEmail(e.target.value)
              sessionStorage.setItem('email', e.target.value)}}
            name="email"
          />
            <br />
            <label>Senha</label>
            <br />
      
          <input type="password"
            className="form-control"
            placeholder="Digite a sua senha secreta"
            value={password}
            required
            name="password"
              onChange={(e) => {
                setPassword(e.target.value)
                sessionStorage.setItem('password', e.target.value)
              }}
          />
          <br />

          <button type="submit" className="btn_signin">
          {
              loading == true ? (
                <div className="spinner-border text-light" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
              ) : <span>Entrar</span>
             
            }
            </button>
            </form>
          </div>

          
      
       
      </div>



      <div className="template_right_sign_in">

      </div>
      
   </Container>
  )
}
export default ClienteSignIn