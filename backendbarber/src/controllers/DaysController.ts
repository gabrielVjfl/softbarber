import express, { Request, Response } from 'express'

const Model = require('../database/models')
const Days =  Model.Days

class DaysControllers {
  async create(Request, Response) {
    try {
    const {
      dayweek,
      hourtoManha,
      hourfromManha,
      hourtoTarde,
      hourfromTarde,
      BarberId
    } = Request.body

    
    let existsDay = await Days.findOne({where: {dayweek: dayweek, BarberId: BarberId}})

    if (existsDay) {
      Response.status(401).json({errBackend: 'Dia já registrado!'})
    }
    else {

    


      const data = {
        dayweek,
        hourtoManha,
        hourfromManha,
        hourtoTarde,
        hourfromTarde,
        BarberId
      }


    

        let response = await Days.create(data)

        Response.status(200).json(response)
      }
      
    }
    catch (err) {
      console.log(err)
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
      }
      
  }
  async list(Request,Response) {
    try {
      const { BarberId } = Request.params
      
      let response = await Days.findOne({
        where: { BarberId: BarberId,  dayweek: 'Segunda-feira'},
        
        attributes: ['hourtoTarde', 'dayweek']
      })

      Response.status(200).json(response)
    }
    catch (err) {
      Response.status(400).json({errBackend: 'Ocorreu um erro'})
      console.log(err)
    }
  }
}
export default new DaysControllers