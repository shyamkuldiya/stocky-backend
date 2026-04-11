import * as z from 'zod'

const supplierSchema = z.object({
  name: z.string().min(3, 'Supplier name must be at least 3 characters long'),
  email: z.email('Invalid email address'),
})

type TSupplier = z.infer<typeof supplierSchema>
export { supplierSchema, TSupplier }
