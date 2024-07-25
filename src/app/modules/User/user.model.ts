import mongoose, { Schema } from 'mongoose';
import { Order, Product } from './user.interface';

const productSchema = new mongoose.Schema<Product>(
  {
    _id: {
      type: String,
      required: true,
     
    },
    title: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    }
  }
 
);

const orderSchema = new mongoose.Schema<Order>(
  {
    customer: {
      type: String,
    //   required: true
    },
    phone: {
      type: String,
    //   required: true
    },
    address: {
      type: String,
    //   required: true
    },
    payment: {
      type: String,
    //   required: true
    },
    product: {
      type: [productSchema],
      required: true
    }
  },
  { timestamps: true }
);

export const Orders = mongoose.model<Order>('Orders', orderSchema);
