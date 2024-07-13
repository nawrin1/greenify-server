import { Request, RequestHandler, Response } from "express";
import { ProductsService } from "./product.service";

const getAllProducts:RequestHandler=async(req:Request,res:Response)=>{
    const result=await ProductsService.getAllProductsFromDb()
    res.send({success:true,data:result})


}

export const ProductsController={
    getAllProducts
}