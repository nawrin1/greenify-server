import express from 'express';
import { ProductsController } from './product.controller';
const router=express.Router()

router.get('/',ProductsController.getAllProducts)
router.get('/:productName',ProductsController.getSingleProducts)
router.patch('/quantity',ProductsController.updateProductsQuantity)

export const ProductRoutes=router;