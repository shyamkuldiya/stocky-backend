import { NextFunction, Request, Response } from 'express'
import { ZodError, ZodType } from 'zod'

function validate<T>(schema: ZodType<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync(req.body)
      next()
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ error: error.message })
      }
    }
  }
}

export { validate }
