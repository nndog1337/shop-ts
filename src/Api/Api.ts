import axios from "axios";
import type { IProduct } from "../interfaces/interfaces";


export async function Products(limit=10){
  try{
    const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`)
    return response.data
  }
  catch(error){
    throw error
  }
}



