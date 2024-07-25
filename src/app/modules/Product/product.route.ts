import express from 'express';
import { ProductsController } from './product.controller';
const router=express.Router()

router.get('/',ProductsController.getAllProducts)
router.get('/:productName',ProductsController.getSingleProducts)
router.delete('/:id',ProductsController.deleteProduct)
router.patch('/quantity',ProductsController.updateProductsQuantity)
router.patch('/update/:id',ProductsController.updateProduct)
router.post('/',ProductsController.addProduct)

export const ProductRoutes=router;