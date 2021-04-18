import express, { Request, Response } from 'express'
import bcryptjs from 'bcryptjs'

const Model = require('../database/models')

const Servicos = Model.Servicos

class ServicosControllers {
  async create(Request, Response) {
    try {
      const {
        name,
        price,
        BarberId
      } = Request.body


      const data = {
        name,
        price,
        BarberId
      }

      let servicos = await Servicos.create(data)

      Response.status(200).json(servicos)

    }
    catch (err) {
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
    }
  }
}
export default new ServicosControllers