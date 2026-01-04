import axios from "axios";
import type { addProduct, IProduct } from "../interfaces/interfaces";


export async function fetchProducts(limit=10){
  try{
    const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products?limit=${limit}`)
    return response.data
  }
  catch(error){
    throw error
  }
}
export async function fetchProduct(id:number){
  try{
    const response = await axios.get<IProduct>(`https://fakestoreapi.com/products/${id}`)
    return response.data
  }
  catch(error){
    throw error
  }
}

export async function fetchAllProducts(){
  try{
    const response = await axios.get<IProduct[]>(`https://fakestoreapi.com/products`)
    return response.data
  }
  catch(error){
    throw error
  }
}

export async function fetchPostProducts(){
  try{
    const response = await axios.post<addProduct>(`/products`,
      {
        "id": 0,
        "title": "string",
        "price": 0.1,
        "description": "string",
        "category": "string",
        "image": "http://example.com"
      }
    )
    return response.data
  }
  catch(error){
    throw error
  }
}





