import express from 'express';
import { ProductsController } from './product.controller';
const router=express.Router()

router.get('/',ProductsController.getAllProducts)

export const ProductRoutes=router;