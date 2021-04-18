import express, { Request, Response } from 'express'

const Model = require('../database/models')
const Days =  Model.Days

import dayjs from 'dayjs'
import datefns from 'date-fns'


class Teste {
  async testando(Request, Response) {
    try {

      //let horaminha = '09:45:00'

      const {
      horaminha
      } = Request.body

      let HourFrom = await Days.findOne({
        where: { BarberId: 4, dayweek: 'Sabado'},
        attributes: ['hourtoTarde']
      })

      let HourTo = await Days.findOne({
        where: { BarberId: 4, dayweek: 'Sabado'},
        attributes: ['hourfromManha']
      })

      let HourFromAlmoco = await Days.findOne({
        where: { BarberId: 4, dayweek: 'Sabado' },
        attributes: ['hourtoManha']
      })

      let HourToAlmoco = await Days.findOne({
        where: { BarberId: 4, dayweek: 'Sabado' },
        attributes: ['hourfromTarde']
      })


      let responseHour = HourFrom.hourtoTarde
      let responseHourTwo = HourTo.hourfromManha

      let responseHourFromAlmoco = HourFromAlmoco.hourtoManha
      let responseHourToAlmoco = HourToAlmoco.hourfromTarde


      if (horaminha > responseHour) {
        Response.status(400).json({errBackend: 'Passou o horario de atendimento!'})
      }
      else if (horaminha < responseHourTwo) {
        Response.status(400).json({errBackend: 'Hora não pode! muito cedo!'})
      }
      else if (horaminha > responseHourFromAlmoco &&  horaminha < responseHourToAlmoco) {
        Response.status(400).json({errBackend: 'Hora de almoço!'})
      }
        
      else {
        Response.status(200).json({suc: 'Ok'})
      }
     
    }
    catch (err) {
      console.log(err)
    }
  }
  async testeTrim(Request: Request, Response: Response) {
    try {
      const {
      number
    } = Request.body

    // remove os espaços em branco do numero
      let formatNumber = number.replace(/\s/g, '')

      Response.status(200).json(formatNumber)
    }
    catch (err) {
      Response.status(400).json({errBack: 'Deu erro'})
      
    }
  }
  async dayMax(Request: Request, Response: Response) {
    try {
      const {BarberId} = Request.params

      // Ver dias q não atendi!!

      const {
        novodia
      } = Request.body

      let dayslist = await Days.findOne({
        where: { BarberId: BarberId,  dayweek: novodia}
      })

      

      if (!dayslist) {
        Response.status(400).json({ errBackend: `Não atende ${novodia}!` })
      }

      else {
        Response.status(200).json(novodia)

      }

    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBack: 'Deu erro'})
      
    }
  }

}
export default new Teste