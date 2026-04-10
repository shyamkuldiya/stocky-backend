import express from 'express'

const app = express()
const router = express.Router()

app.use(express.json())

export { app, router }
