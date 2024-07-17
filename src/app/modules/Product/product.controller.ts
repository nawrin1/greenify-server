import { Request, RequestHandler, Response } from "express";
import { ProductsService } from "./product.service";

const getAllProducts:RequestHandler=async(req:Request,res:Response)=>{
    const product  = req.query;
    // const product=products as Record<string,unknown>
    // console.log(req.query,"product")
    let filter={}
    let sorted: Record<string, 1|-1>={price:1}
    if(product?.searchValue as string){
        filter = {
            $or: [
              { title: { $regex: product.searchValue, $options: 'i' } },
              { category: { $regex: product.searchValue, $options: 'i' } }
            ]
          }
    }
    if(product?.sort=='title' || product?.sort =='category'as string){
        sorted={[product?.sort as string]:1}
    }
    if(product?.sort =='high' as string){
        sorted={price:-1}
    }
    if(product?.max  =="NaN" || product?.min  =="NaN" ){
        filter={...filter,$and:[
            {price:{$lt:Number(1000)}},
            {price:{$gt:Number(0)}
        }
        ]}
        
    }


    else if(product?.max  as string || product?.min  as string ){
        filter={...filter,$and:[
            {price:{$lt:Number(product.max)}},
            {price:{$gt:Number(product.min)}
        }
        ]}
        
    }


    const result=await ProductsService.getAllProductsFromDb(filter,sorted)
    res.send({success:true,data:result})


}
const getSingleProducts:RequestHandler=async(req:Request,res:Response)=>{
    const {productName}=(req.params)
    // console.log(productName)

    const result=await ProductsService.getSingleProductsFromDb(productName)
    // console.log(result,"from server single prod")
    res.send({success:true,data:result})


}

const updateProductsQuantity:RequestHandler=async(req:Request,res:Response)=>{
    // console.log(req.body,"from controller")
    const result=await ProductsService.updateProductsQuantityDb(req.body)
    res.send({success:true,data:result})
    

}



export const ProductsController={
    getAllProducts,
    getSingleProducts,
    updateProductsQuantity
}