import {Request, Response} from 'express'

const Model = require('../database/models')
const Clientes = Model.Clientes
import bcryptjs from 'bcryptjs'

import {Criptografia} from '../cript/Cript'

import jwt from 'jsonwebtoken'
const authSecret = require('../auth/secret.json')

const validarCpf = require('validar-cpf');

class ClientesControllers {
  async create(Request, Response) {
    try {


      let validationCpf = validarCpf(Request.body.cpf)

      if (validationCpf == false) {
        Response.status(401).json({ errBackend: 'Cpf inválido!' })
      }

      else {

        const salt = await bcryptjs.genSalt()
        let hashedPassword = await bcryptjs.hash(Request.body.password, salt)
    
        let hashedCpf = await Criptografia(Request.body.cpf)
      
        Request.body.password = hashedPassword
        Request.body.cpf = hashedCpf
     

      const { location: avatar } = Request.file

      
        const {
          name,
          email,
          password,
          telefone,
          cpf,
        } = Request.body


        let existsCpf = await Clientes.findOne({ where: { cpf: cpf } })

        let existsEmail = await Clientes.findOne({ where: { email: email } })
      
        if (existsEmail) {
          Response.status(401).json({ errBackend: 'Email já cadastrado!' })
        }
        else if (existsCpf) {
          Response.status(401).json({ errBackend: 'Cpf já cadastrado!' })
        }
    
        else {

          const data = {
            name,
            email,
            password,
            avatar,
            telefone,
            cpf,
          }

    
          let user = await Clientes.create(data)


          user.password = undefined
          user.cpf = undefined

          let token = await jwt.sign({ id: user.id }, authSecret.secret, {
            expiresIn: 86400
          })

          Response.status(201).json({ user, token })
        }
      }
      
    }
    catch (err) {
      console.log(err)
      Response.status(401).json({ errBackend: 'Deu erro' })
    }
  }
  async login(Request, Response) {
    try {
      const { email, password } = Request.body
      
      let user = await Clientes.findOne({ email: email })
      
      if (!user) {
        Response.status(401).json({ errBackend: 'Email não cadastrado' })
      }

      if (!(await bcryptjs.compare(password, user.password)))  {
        Response.status(401).json({ errBackend: 'Senha invalida' })
      
      }
      else {
        let token = await jwt.sign({ id: user.id }, authSecret.secret, {
          expiresIn: 86400
        })

        user.password = undefined

        user.cpf = undefined

        Response.status(201).json({user, token})
      }
    }
  
    catch (err) {
      console.log(err)
      Response.status(401).json({errBackend: 'Ocorreu um erro interno'})
    }
  }
  async listClientes(Request, Response) {
    try {
    const {id} = Request.params

      let response = await Clientes.findOne({
        where: { id: id },
        attributes: ['name', 'email', 'avatar', 'telefone']
      })

      Response.status(200).json(response)
    }
    catch (err) {
      console.log(err)
      Response.status(400).json(err)
    }
  }
}
export default  new ClientesControllers