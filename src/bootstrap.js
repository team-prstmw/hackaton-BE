import mongoose from 'mongoose'

import app from './app'
import env from './constants/env'

let server

mongoose
    .connect(env.MONGODB_URL, {
        useNewUrlParser: true,
    })
    .then(() => {
        console.info('Connected to MongoDB')

        server = app.listen(env.PORT, () => {
            console.info(`Listening to port ${env.PORT}`)
        })
    })

const exitHandler = () => {
    if (server) {
        server.close(() => {
            console.info('Server closed')
            process.exit(1)
        })
    } else {
        process.exit(1)
    }
}

const unexpectedErrorHandler = (error) => {
    console.error(error)
    exitHandler()
}

process.on('uncaughtException', unexpectedErrorHandler)
process.on('unhandledRejection', unexpectedErrorHandler)

process.on('SIGTERM', () => {
    console.info('SIGTERM received')

    if (server) {
        server.close()
    }
})
