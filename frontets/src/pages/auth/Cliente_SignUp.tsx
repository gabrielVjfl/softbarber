import React,{useEffect, useState, ChangeEvent} from 'react'
import {Container, TemplateLeft, TemplateRight} from '../../styles/Style1'
import Home from '../../assets/home.jpg'
import Logo from '../../assets/softbarber.png'
import '../../styles/clients/style_signup_cliente.css'
import Axios from 'axios'
import URL from '../../utils/URL'
//import CpfCnpj from "@react-br-forms/cpf-cnpj-mask";
import MaskedInput from 'react-input-masked'
import Swal from 'sweetalert2'
import {useHistory} from 'react-router-dom'

const ClienteSignUp = () => {

  const history = useHistory()


  const [erros, setErros] = useState<string>('')

  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [password, setPassword] = useState<string>("")
  const [cpf, setCpf] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File>({} as File);
  const [telefone, setTelefone] = useState<string>("")

  const [loading, setLoading] = useState(false)

  const HandleFile = (e: ChangeEvent<HTMLInputElement>) => { 
    if (e.target.files?.[0])
      setSelectedFile(e.target.files[0]); 

  };

  const HandleSubmit = async (e: ChangeEvent<HTMLFormElement>) => {

    e.preventDefault()
    try {
      setLoading(true)
      const data = new FormData()
      
      data.append('name', name)
      data.append('email', email)
      data.append('password', password)
      data.append('cpf', cpf)
      data.append('telefone', telefone)

    if (selectedFile) {
      data.append('file', selectedFile);
    }

      let response = await Axios.post(`${URL}/clientes/create`, data)

      setName('')
      setEmail('')
      setPassword('')
      setCpf('')
      setTelefone('')
     
      setLoading(false)


      Swal.fire({
        title: 'Sucesso!',
        text: `${name} Voce foi cadastrado com sucesso!`,
        icon: 'success',
        confirmButtonText: 'Ok'
      })

      history.replace('/cliente/signin')

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
       
        <span className="text_signup">Faça o seu cadastro</span>
<form onSubmit={HandleSubmit}>
        <div className="template_inputs_signup">
        <label>Nome Completo</label>
          <input type="text"
            autoFocus={true}
            placeholder="Digite o seu nome completo"
            className="form-control"
            value={name}
            name="name"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
     
        <label>Email</label>
          <input
            type="email"
            placeholder="Digite o seu email"
            className="form-control"
            value={email}
            required
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          ></input>

     
        <label>Senha</label>
          <input
            type="password"
            placeholder="Digite a sua senha"
            className="form-control"
            value={password}
            name="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>

      
        <label>Foto perfil</label>
            <input type="file" name="file"
            
            onChange={HandleFile}
        placeholder="Selecione uma foto de perfil"
         className="form-control"></input>

      
        <label>Telefone</label>
          <input
            type="text"
            name="telefone"
            placeholder="Digite o seu nome telefone"
            className="form-control"
            value={telefone}
            required
            onChange={(e) => setTelefone(e.target.value)}
          ></input>
          
      
          <label>CPF</label>
          <MaskedInput
            type="cpf"
            value={cpf}
            placeholder="Digite o seu cpf"
            required
            name="cpf"
            className="form-control"
            onChange={(e) => setCpf(e.target.value)} />

        
     
       
        </div>
      
          <button type="submit" className="btn_signup">
            
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
       
    



      <div className="template_right">

      </div>
      
   </Container>
  )
}
export default ClienteSignUp