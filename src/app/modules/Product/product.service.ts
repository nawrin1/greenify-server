import { Products } from "./product.model";

const getAllProductsFromDb = async () => {
    const result = await Products.find() ;
  
    return result;
  };

export const ProductsService={
    getAllProductsFromDb
}