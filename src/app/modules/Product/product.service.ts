import { Products } from "./product.model";

const getAllProductsFromDb = async (filter:any,sorted :Record<string, 1|-1>) => {
    const result = await Products.find(filter).sort(sorted) ;
  
    return result;
  };
const getSingleProductsFromDb = async (productName:string) => {
    
    const result = await Products.findOne({title:productName}) ;
  
    return result;
  
  };

export const ProductsService={
    getAllProductsFromDb,
    getSingleProductsFromDb
}