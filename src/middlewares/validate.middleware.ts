import { NextFunction, Request, Response } from 'express'
import { ZodType } from 'zod'

async function validate<T>(schema: ZodType<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      const parsed = await schema.parseAsync(req.body)
      req.body = parsed
      next()
    } catch (error) {}
  }
}
