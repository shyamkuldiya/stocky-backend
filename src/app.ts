import express from 'express'

const app = express()
const router = express.Router()

app.use(express.json())

app.use('/api/v1/auth')
export { app, router }
