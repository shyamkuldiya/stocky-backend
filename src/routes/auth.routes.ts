import express from 'express'

const router = express.Router()
router.use('/', (req, res) => {
  res.send({ message: 'Auth' })
})

export { router as authRouter }
