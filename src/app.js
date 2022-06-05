import express from 'express'
import helmet from 'helmet'
import env from './constants/env'
import routes from './routes'

import cors from 'cors'

const app = express()

app.use(
    cors({
      origin: ['http://localhost:3000', 'https://hackaton-fe.vercel.app/'],
    })
  );

app.use(helmet())

app.use(express.json())

app.use(express.urlencoded({ extended: true }))

if (env.NODE_ENV === 'production') {
    app.use(express.static('public'))
}

app.use('/api', routes)

export default app
