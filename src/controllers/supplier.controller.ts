import { Request, Response } from 'express'
import * as SupplierService from '../services/supplier.services'
import { TSupplier } from '../validations/supplier.schema'

async function createSupplier(req: Request<{}, {}, TSupplier>, res: Response) {
  try {
    const data = req.body
    const supplier = await SupplierService.createSupplier(data)
    res.status(201).json({ message: 'Supplier created successfully', supplier })
  } catch (error: unknown) {
    res.status(400).json({
      message: (error as Error).message || 'Unable to create supplier!, ',
    })
  }
}

async function getAllSuppliers(req: Request, res: Response) {
  try {
    const suppliers = await SupplierService.getAllSuppliers()
    res 
      .status(200)
      .json({ message: 'Suppliers fetched successfully', suppliers })
  } catch (error: unknown) {
    res.status(400).json({
      message: (error as Error).message || 'Unable to fetch suppliers!, ',
    })
  }
}

export { createSupplier, getAllSuppliers }
