import express from 'express'

const app = express()
const router = express.Router()

app.use(express.json())

import { authRouter } from './routes/auth.routes'

app.use('/api/v1', authRouter)

export { app, router }
