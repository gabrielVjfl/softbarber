const port = 9100

import express from 'express'

const app = express()

import cors from 'cors'

import route from './routes/routes'

app.use(cors())

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/api', route)

app.listen(port, () => {
  console.log('listening on port', port)
})