import test from 'node:test'
import { z } from 'zod'

const purchaseSchema = z.object({
  productId: z.uuid(),
  quantity: z.int().positive(),
})
