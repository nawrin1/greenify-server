import mongoose from "mongoose";
import { Order } from "../User/user.interface";
import { Orders } from "../User/user.model";
import { Products } from "./product.model";
import { TProduct } from "./product.interface";

const getAllProductsFromDb = async (filter:any,sorted :Record<string, 1|-1>) => {
    const result = await Products.find(filter).sort(sorted) ;
  
    return result;
  };
const getSingleProductsFromDb = async (productName:string) => {
    
    const result = await Products.findOne({title:productName}) ;
  
    return result;
  
  };

const updateProductsQuantityDb= async (orders:Order) => {
  console.log("what")
    
  const result = await Orders.create(orders) ;
  const cartProducts=orders.product
  const allProduct= await Products.find();
  const newProducts=[]
  for (const cartProduct of cartProducts) {
    const productId = new mongoose.Types.ObjectId(cartProduct._id);
    const updatedProduct = await Products.findByIdAndUpdate(
      productId,
      { $inc: { quantity: -cartProduct.quantity } }, // Use $inc to decrement quantity
      { new: true} // Only return the updated quantity field
    );
    newProducts.push(updatedProduct)
  }
  
  // console.log(newProducts,"new")

  return newProducts;

};
const deleteProductDb=async(_id:string)=>{
  console.log(_id)
  
  const result=await Products.findByIdAndDelete(_id)
  return result


}

const updateProductDb=async(id:string,data:TProduct)=>{
  const updatedProduct = await Products.findByIdAndUpdate(id, data, { new: true });
  return updatedProduct;
 



}

const addProductDb=async(data:TProduct)=>{
  const addedProduct = await Products.create( data);
  return addedProduct;
 



}

export const ProductsService={
    getAllProductsFromDb,
    getSingleProductsFromDb,
    updateProductsQuantityDb,
    deleteProductDb,
    updateProductDb,
    addProductDb
}