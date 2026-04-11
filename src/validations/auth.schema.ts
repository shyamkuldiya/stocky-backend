import * as z from 'zod'

const registerSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'MANAGER', 'STAFF']),
  refreshToken: z.string().optional(),
})

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

type TRegister = z.infer<typeof registerSchema>
type TLogin = z.infer<typeof loginSchema>

export { registerSchema, loginSchema, TRegister, TLogin }
