import express from 'express'
import { validate } from '../middlewares/validate.middleware'
import { supplierSchema } from '../validations/supplier.schema'
import {
  createSupplier,
  getAllSuppliers,
} from '../controllers/supplier.controller'

const router = express.Router()

router.route('/create-supplier').post(validate(supplierSchema), createSupplier)
router.route('/suppliers').get(getAllSuppliers)

export { router as supplierRouter }
