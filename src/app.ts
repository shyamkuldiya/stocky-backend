import express from 'express'
import { json, urlencoded } from 'body-parser'
const app = express()

app.use(json())
app.use(urlencoded({ extended: true }))

import { authRouter } from './routes/auth.routes'
import { supplierRouter } from './routes/supplier.routes'

app.use('/api/v1', authRouter)
app.use('/api/v1', supplierRouter)

export { app }
