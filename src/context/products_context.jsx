import axios from 'axios'
import React, { useEffect, useReducer, useContext } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'

import {
 GET_PRODUCTS_ERROR,
 GET_PRODUCTS,
 GET_PRODUCTS_SUCCESS,
 GET_SINGLE_PRODUCT_ERROR,
 GET_SINGLE_PRODUCT_SUCCESS,
 LOAD_PRODUCTS,
 GET_SINGLE_PRODUCT,
} from '../actions'

const initialState = {
 products: [],
 products_loading: false,
 products_error: false,
 featured_products: [],
 single_product_loading: false,
 single_product_error: false,
 single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
 const [state, dispatch] = useReducer(reducer, initialState)

 const getAllProducts = async (url) => {
  dispatch({ type: GET_PRODUCTS })
  try {
   const response = await axios.get(url)
   //  set response to products

   const products = response.data

   dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
  } catch (error) {
   dispatch({ type: GET_PRODUCTS_ERROR })
  }
 }

 const getSingleProduct = async (url) => {
  dispatch({ type: GET_SINGLE_PRODUCT })
  try {
   const response = await axios.get(url)
   const singleProduct = response.data
   dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
  } catch (error) {
   dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
  }
 }

 useEffect(() => {
  getAllProducts(`${url}`)
 }, [])

 return (
  <ProductsContext.Provider value={{ ...state, getSingleProduct }}>
   {children}
  </ProductsContext.Provider>
 )
}


export const useProductsContext = () => {
 return useContext(ProductsContext)
}


