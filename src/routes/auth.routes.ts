import express from 'express'
import { validate } from '../middlewares/validate.middleware'
import { registerSchema } from '../validations/auth.schema'
import { registerUser } from '../controllers/auth.controller'

const router = express.Router()

router.route('/register').post(validate(registerSchema), registerUser)
export { router as authRouter }
