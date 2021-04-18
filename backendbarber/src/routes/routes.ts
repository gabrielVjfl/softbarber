import express, { Router } from 'express'

import ClientesControllers from '../controllers/ClientesControllers'
import BarbersControllers from '../controllers/BarbersControllers'
import ServicosControllers from '../controllers/ServicosControllers'
import SchedulesController from '../controllers/SchedulesControllers'
import AppointmentsController from '../controllers/AppointmentsControllers'
import PaysAgendamentoController from '../controllers/PayAgendamento'
import multer from 'multer'
import multerConfig from '../imgconfig/uploader'
import PayssControllers from '../controllers/PaysControllers'
import DaysControllers from '../controllers/DaysController'
import Teste from '../controllers/LatLng'

let route = Router()

route.post('/clientes/create', multer(multerConfig).single('file'), ClientesControllers.create)
route.post('/clientes/login', ClientesControllers.login)
route.get('/clientes/list/:id', ClientesControllers.listClientes)

route.post('/barbers/create', multer(multerConfig).single('file'), BarbersControllers.create)
route.post('/barbers/login', BarbersControllers.login)
route.get('/barbers/list/servicos/:id', BarbersControllers.listServicosParams)
route.get('/barbers/list/schedules/:id', BarbersControllers.listSchedulesParams)
route.get('/barbers/list/appointments/:id', BarbersControllers.listAppointments)
route.get('/barbers/list', BarbersControllers.listTotal)
route.get('/barbers/list/params/:id', BarbersControllers.listParams)

route.post('/servicos/create', ServicosControllers.create)
route.post('/schedules/create', SchedulesController.create)

route.post('/appointments/create', AppointmentsController.create)
route.get('/appointments/list/clientes/:ClienteId', AppointmentsController.listClientesAppointments)

route.post('/pay/agendamento/create', PaysAgendamentoController.create)


route.get('/pay/submit', PayssControllers.createPay)

route.post('/days/create', DaysControllers.create)
route.get('/days/list/:BarberId', DaysControllers.list)


route.get('/teste', Teste.testando)
route.post('/teste/trim', Teste.testeTrim)
route.post('/teste/days/:BarberId', Teste.dayMax)

export default route