export type Product = {
    _id: string;
    title: string;
    price: number;
    quantity: number;
  };
  
export type Order = {
    customer: string;
    phone: string;
    address: string;
    payment: string;
    product: Product[];
  };
  