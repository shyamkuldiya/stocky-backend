import express from 'express'
import { validate } from '../middlewares/validate.middleware'
import { loginSchema, registerSchema } from '../validations/auth.schema'
import { loginUser, registerUser } from '../controllers/auth.controller'

const router = express.Router()

router.route('/register').post(validate(registerSchema), registerUser)
router.route('/login').post(validate(loginSchema), loginUser)

export { router as authRouter }
