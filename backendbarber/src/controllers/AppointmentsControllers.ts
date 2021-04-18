import {Request, Response} from 'express'

const Model = require('../database/models')
const Appointments = Model.Appointments

let datefns = require('date-fns')
import dayjs from 'dayjs'

const Days =  Model.Days

class AppointmentsController {
  async create(Request, Response) {
    try {

      const {
        horamarcada,
        diasemana,
        weekday, // dia da semana
        day, 
        servico, // pode ter relacionamento
        daytotal,
        BarberId,
        ClienteId,
        PayAgendamentoId,
        paytype
      } = Request.body

      
      // console.log(new Date())

      // Pegar data + hora
      let dateNew = day + 'T' + horamarcada + ':00'+ '.00' + '0Z'
      console.log(dateNew)
      
      const formatDateNew = datefns.parseISO(dateNew)

      // Formatar hora padrão javascript
      let datajs = new Date();

      // Formatar o timezone
      let dataAtualFormat =
      new Date(datajs.valueOf() - datajs.getTimezoneOffset() * 60000);


      let existsDayBarber = await Appointments.findOne({
        where: {
          diasemana: diasemana,
          horamarcada: horamarcada,
          weekday: weekday,
          day,
          daytotal,
          BarberId: BarberId
        }
      })
          // Validar se tem dia q não atende!
      let dayslist = await Days.findOne({
        where: { BarberId: BarberId, dayweek: diasemana}
      })

      if (!dayslist) {
        Response.status(400).json({ errBackend: `Não atende ${diasemana}!` })
      }
 
      else {

        let HourFromManha = await Days.findOne({
          where: { BarberId: BarberId, dayweek: diasemana },
          attributes: ['hourfromManha']
        })

      
        let HourToManha = await Days.findOne({
          where: { BarberId: BarberId, dayweek: diasemana },
          attributes: ['hourtoManha']
        })

        let HourToTarde = await Days.findOne({
          where: { BarberId: BarberId, dayweek: diasemana },
          attributes: ['hourtoTarde']
        })


        let HourFromTarde = await Days.findOne({
          where: { BarberId: BarberId, dayweek: diasemana },
          attributes: ['hourfromTarde']
        })


        let responseHourFromAlmoco = HourFromManha.hourfromManha

        let responseHourToAlmoco = HourToManha.hourtoManha

        let responseHourFromTarde = HourFromTarde.hourfromTarde

        let responseHourToTarde = HourToTarde.hourtoTarde

        

        // data atual com mais 8 dias
        const dataAdd = await datefns.addDays(new Date(), 8)

        let dataAddNew = await dayjs(dataAdd).format("YYYY-MM-DD")
        console.log('A data limite', dataAddNew)

      // se o dia for mais q o dia atual e mais 8 dias
      if (day > dataAddNew) {
          Response.status(400).json({
            errBackend:
              'Data tem q ser menor do que 10 dias a partir da data de hoje!'
          })
        }
        // Validação se utilizar data mes ano e dia
        else if (datefns.isBefore(formatDateNew, dataAtualFormat)) {
          Response.status(400).json({ errBackend: 'Essa data e horario não é mais permitida' })
        }

        else if (datefns.isBefore(daytotal, dataAtualFormat)) {
          Response.status(400).json({ errBackend: 'Data não permitida!' })
        }

        else if (existsDayBarber) {
          Response.status(400).json(
            { errBackend: 'Já existe um agendamento para esse barbeiro nesse dia e horario!' })
        }

        else if (horamarcada < responseHourFromAlmoco) {
          Response.status(400).json({ errBackend: 'Hora não permitida pois é mais cedo do que a hora de abrir!' })

        }
        else if (horamarcada > responseHourToTarde) {
          Response.status(400).json({ errBackend: 'Hora não permitida pois é mais tarde do que a hora de fechar!' })
        }

        else if (horamarcada > responseHourToAlmoco && horamarcada < responseHourFromTarde) {
          Response.status(400).json({ errBackend: 'Hora de almoço!' })
        }


        else {
  
          const data = {
            horamarcada,
            weekday, 
            day,
            servico, // pode ter relacionamento, option
            daytotal,
            BarberId,
            diasemana,
            ClienteId,
            PayAgendamentoId,
            paytype,
          }

          let response = await Appointments.create(data)

          Response.status(200).json(response)
        }
      }
    }
    catch (err) {
      console.log(err)
      Response.status(400).json(err)
    }
  }
  async listClientesAppointments(Request, Response) {
    try {
      const { ClienteId } = Request.params
      
      let response = await Appointments.findAll({ where: { ClienteId: ClienteId } })
      
      Response.status(200).json(response)

    }
    catch (err) {
      Response.status(400).json(err)
    }
  }
}
export default new AppointmentsController