// src/lib/prisma.ts
import { PrismaClient } from '../prisma/generated/prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'
import { Pool } from 'pg'

const connectionString = process.env.DATABASE_URL
const pool = new Pool({
  connectionString,
  idleTimeoutMillis: 60000,
})
const adapter = new PrismaPg(pool)
const prisma = new PrismaClient({ adapter })

export default prisma
