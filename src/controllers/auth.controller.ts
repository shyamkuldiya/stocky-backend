import { Request, Response } from 'express'
import { TLogin, TRegister } from '../validations/auth.schema'
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

async function loginUser(req: Request<{}, {}, TLogin>, res: Response) {
  try {
    const data = req.body
    const user = await AuthService.loginUser(data)
    res.status(200).json({ message: 'User logged in successfully', user })
  } catch (error: unknown) {
    res.status(400).json({
      message: (error as Error).message || 'Unable to login user!, ',
    })
  }
}

export { registerUser, loginUser }
