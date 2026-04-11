import prisma from '../lib/prisma'
import { TSupplier } from '../validations/supplier.schema'

async function createSupplier(data: TSupplier) {
  console.log({ data })
  try {
    const { name, email } = data

    const isSupplierExists = await prisma.supplier.findUnique({
      where: {
        email: email,
      },
    })

    if (isSupplierExists) {
      throw new Error(`Supplier with ${email} already exists`)
    }

    const supplier = await prisma.supplier.create({
      data: {
        name,
        email,
      },
    })

    return supplier
  } catch (error) {
    throw error
  }
}

async function getAllSuppliers() {
  try {
    console.time('DB')
    const suppliers = await prisma.supplier.findMany({
      select: {
        id: true,
        name: true,
        email: true,
      },
    })
    console.timeEnd('DB')

    return suppliers
  } catch (error) {
    throw error
  }
}

export { createSupplier, getAllSuppliers }
