import { Request, Response } from 'express'
import { TRegister } from '../validations/auth.schema'
import * as AuthService from '../services/auth.services'

async function registerUser(req: Request<{}, {}, TRegister>, res: Response) {
  try {
    const data = req.body
    const user = await AuthService.registerUser(data)
    res.status(201).json({ message: 'User registered successfully', user })
  } catch (error: unknown) {
    res.status(400).json({
      message: (error as Error).message || 'Unable to register user!, ',
    })
  }
}

export { registerUser }
