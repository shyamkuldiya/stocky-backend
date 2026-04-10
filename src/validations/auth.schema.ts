import * as z from 'zod'

const registerSchema = z.object({
  name: z.string().min(3),
  email: z.email(),
  password: z.string().min(6),
  role: z.enum(['ADMIN', 'MANAGER', 'STAFF']),
})

const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6),
})

type RegisterType = z.infer<typeof registerSchema>
type LoginType = z.infer<typeof loginSchema>

export { registerSchema, loginSchema, RegisterType, LoginType }
