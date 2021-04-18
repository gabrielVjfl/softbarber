import {Request, Response} from 'express'

const Model = require('../database/models')
const Schedules = Model.Schedules

import ConvertHourToMinutes from '../utils/convertHourToMinutes'


class SchedulesController {
  async create(Request, Response) {
    try {
      const {
        diasemana,
        weekday,
        horato,
        horafrom,
        horacomeco,
        horafim,
        BarberId
      } = Request.body

      let response = await Schedules.create({
        diasemana,
        weekday,
        horato: ConvertHourToMinutes(horato),
        horafrom: ConvertHourToMinutes(horafrom),
        horacomeco,
        horafim,
        BarberId,  
      })

      Response.status(200).json(response)
    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
    }
  }
}

export default new SchedulesController