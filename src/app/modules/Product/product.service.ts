import mongoose from "mongoose";
import { Order } from "../User/user.interface";
import { Orders } from "../User/user.model";
import { Products } from "./product.model";

const getAllProductsFromDb = async (filter:any,sorted :Record<string, 1|-1>) => {
    const result = await Products.find(filter).sort(sorted) ;
  
    return result;
  };
const getSingleProductsFromDb = async (productName:string) => {
    
    const result = await Products.findOne({title:productName}) ;
  
    return result;
  
  };

const updateProductsQuantityDb= async (orders:Order) => {
    
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

export const ProductsService={
    getAllProductsFromDb,
    getSingleProductsFromDb,
    updateProductsQuantityDb
}