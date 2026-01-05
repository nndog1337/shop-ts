import axios from "axios";
import type { IProduct } from "../interfaces/interfaces";

const BASE_URL = 'https://fakestoreapi.com/products'

export async function fetchProducts(limit=10): Promise<IProduct[]>{
  try{
    const response = await axios.get<IProduct[]>(`${BASE_URL}?limit=${limit}`)
    return response.data
  }
  catch(error){
    throw error
  }
}
export async function fetchProduct(id:number): Promise<IProduct>{
  try{
    const response = await axios.get<IProduct>(`${BASE_URL}/${id}`)
    return response.data
  }
  catch(error){
    throw error
  }
}

export async function fetchAllProducts(): Promise<IProduct[]>{
  try{
    const response = await axios.get<IProduct[]>(`${BASE_URL}`)
    return response.data
  }
  catch(error){
    throw error
  }
}

export async function fetchPostProducts(product:IProduct): Promise<IProduct>{
  try{
    const { id, ...productWithoutId } = product
    const response = await axios.post<IProduct>(`${BASE_URL}`, productWithoutId)
    return response.data
  }
  catch(error){
    throw error
  }
}





