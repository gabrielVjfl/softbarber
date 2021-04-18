import express, { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'
import {Criptografia} from '../cript/Cript'
const Model = require('../database/models')
const Barbers = Model.Barbers

const Schedules = Model.Schedules
const Servicos = Model.Servicos
const Clientes = Model.Clientes
const Days = Model.Days

const Appointments = Model.Appointments

import jwt from 'jsonwebtoken'
const authSecret = require('../auth/secret.json')

import ConvertHourToMinutes from '../utils/convertHourToMinutes'
import schedules from '../database/models/schedules'


const validarCpf = require('validar-cpf');

class BarbersControllers {

  async create(Request, Response) {

    try {

      let validationCpf = validarCpf(Request.body.cpf)

      if (validationCpf == false) {
        Response.status(401).json({ errBackend: 'Cpf inválido!' })
      }
      else {
    
    interface ScheduleItem {
      weekday: number,
      horafrom: string,
      horato: string
    }

      const salt = await bcryptjs.genSalt()
      let hashedPassword = await bcryptjs.hash(Request.body.password, salt)
     
      
      Request.body.password = hashedPassword
     
      let hashedCpfCnpj = await Criptografia(Request.body.cpfcnpj)
      let hashedNumberCount = await Criptografia(Request.body.numerodaconta)

      Request.body.cpfcnpj = hashedCpfCnpj

      Request.body.numerodaconta = hashedNumberCount


     // const { location: avatar } = Request.file


      const {
        namelocal,
        cidade,
        estado,
        rua,
        avatar,
        cep,
        telefone,
        numero,
        bairro,
        email,
        password,
        cpfcnpj,
        name,
        price,
        schedule,
        numerodaconta
    } = Request.body
   

      let existsEmail = await Barbers.findOne({where: {email:email}})

      let existsCpfCnpj = await Barbers.findOne({ where: { cpfcnpj: cpfcnpj } })
      
      let existsNumberCount = await Barbers.findOne({ where: { numerodaconta: numerodaconta } })
      
        if (existsEmail) {
          Response.status(401).json({ errBackend: 'Email já cadastrado!' })
        }
        else if (existsCpfCnpj) {
          Response.status(401).json({ errBackend: 'Cpf-cnpj já cadastrado!' })
        }

        else if (existsNumberCount) {
          Response.status(401).json({ errBackend: 'Número da conta já cadastrado!' })
        }

        else {

     
          let user = await Barbers.create({
            namelocal,
            cidade,
            avatar,
            estado,
            cep,
            rua,
            telefone,
            numero,
            bairro,
            email,
            password,
            cpfcnpj,
            numerodaconta
          })

    
          let idBarber = user.id

          user.password = undefined
          user.cpf = undefined

          let token = await jwt.sign({ id: user.id }, authSecret.secretbarber, {
            expiresIn: 86400
          })
      
          // SERVIÇO

          let servicos = await Servicos.create({
            name,
            price,
            BarberId: idBarber
          })

          // let userBarberId = servicos.barbersId

          // SCHEDULES

          //  let scheduleClass = schedule.map((scheduleItem: ScheduleItem) => {
          //    return {
          //    barbersId: userBarberId,
          //     weekday: scheduleItem.weekday,
          ///     horato: ConvertHourToMinutes(scheduleItem.horato),
          //horafrom: ConvertHourToMinutes(scheduleItem.horafrom),
           
          //  }
          //})

          // await Schedules.create({ scheduleClass })

          Response.status(201).json({ user, token, servicos })
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
      
      let user = await Barbers.findOne({where: {email: email}})

      if (!user) {
        Response.status(401).json({ errBackend: 'Usuário não cadastrado!' })
      }
      else if (!(await bcryptjs.compare(password, user.password))) {
        Response.status(401).json({ errBackend: 'Senha incorreta!' })
      }
      else {
        let token = await jwt.sign({ id: user.id }, authSecret.secretbarber, {
          expiresIn: 86400
        })

        user.password = undefined

        Response.status(201).json({ user, token })
      }
    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
    }
  }
 

  async listSchedulesParams(Request, Response) {
    try {
      const {id} = Request.params
      let response = await Barbers.findAll({where: {id:id}, include: { model: Days} })
      
      Response.status(200).json(response)
    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
    }
  }

  async listServicosParams(Request, Response) {
    try {
      const { id } = Request.params
      
      let response = await Barbers.findAll({where: {id: id}, include: { model: Servicos } })
     
      Response.status(200).json(response)
    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
    }
  }
  async listAppointments(Request, Response) {
    try {
      const {id} = Request.params
      let response = await Barbers.findAll({
        where: { id: id }, attributes: ['namelocal', 'cidade', 'estado', 'cep'],
        include: [{ model: Appointments }]
      })
      Response.status(200).json(response)
    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
    }
  }
  async listTotal(Request, Response) {
    try {
   
      const { cidade } = Request.query

      let response = await Barbers.findAll({
        where: { cidade: cidade }, include: [{ model: Servicos }]
      })

      Response.status(200).json(response)
     
    }

    catch (err) {
      console.log(err)
      Response.status(400).json({ errBackend: 'Ocorreu um erro' })
    }
  }
    async listParams(Request, Response) {
      try {
        const { id } = Request.params
        
        let response = await Barbers.findOne({
          where: { id: id }, include: [{ model: Servicos },
          { model: Schedules }]
        })
        
          Response.status(200).json([response])
        
      }
      catch (err) {
        Response.status(400).json({errBackend: 'Ocorreu um erro'})
      }
  }
 
}
export default new BarbersControllers