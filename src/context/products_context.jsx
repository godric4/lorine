import axios from 'axios'
import React, { useEffect, useReducer } from 'react'
import reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'

import {
  GET_PRODUCTS_ERROR,
  GET_PRODUCTS_BEGIN,
  GET_PRODUCTS_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
  GET_SINGLE_PRODUCT_SUCCESS,
  LOAD_PRODUCTS,
  GET_SINGLE_PRODUCT_BEGIN,
} from '../actions'

const initialState = {
  products: [],
  products_loading: false,
  products_error: false,
  featured_products: [],
}

export const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const getAllProducts = async (url) => {
    dispatch({ type: GET_PRODUCTS_BEGIN })
    try {
      const response = await axios.get(url)
      //  set response to products
      const products = response.data
      dispatch({ type: GET_PRODUCTS_SUCCESS, payload: products })
    } catch (error) {}
  }

  useEffect(() => {
    getAllProducts(url)
  }, [])

  return (
    <ProductsContext.Provider value='hello'>
      {children}
    </ProductsContext.Provider>
  )
}
