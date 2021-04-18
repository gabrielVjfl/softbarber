import {Request, Response} from 'express'

const Model = require('../database/models')
const PayAgendamentos = Model.PayAgendamentos

import {Criptografia} from '../cript/Cript'

class PaysAgendamentoController {
  async create(Request, Response) {
    try {

      let hasheCpf = await Criptografia(Request.body.cpf)
      let hashedNumberCard = await Criptografia(Request.body.numbercard)
      
      Request.body.cpf = hasheCpf
      Request.body.numbercard = hashedNumberCard

      const {
        numbercard,
        titular,
        cvc,
        cpf,
        ClienteId
      } = Request.body

      let existsNumberCard = await PayAgendamentos.findOne({where: {numbercard: numbercard }})

      let existsNumberCpf = await PayAgendamentos.findOne({where: {cpf: cpf }})

      if (existsNumberCpf) {
        Response.status(401).json({ errBackend: 'Cpf ja inserido' })
      }

      else if (existsNumberCard) {
        Response.status(401).json({ errBackend: 'Número do cartão ja inserido' })
      }
      else {

        const data = {
          numbercard,
          titular,
          cvc,
          cpf,
          ClienteId
        }

        let response = await PayAgendamentos.create(data)

        Response.status(200).json(response)
      }
    }
    catch (err) {
      Response.status(400).json({ errBackend: 'Ocorreu um erro' })
      console.log(err)
    }
  }
}
export default new PaysAgendamentoController