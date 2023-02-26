import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { UtilsProvider } from './context/utils_context'
import { ProductsProvider } from './context/products_context'
import { CartProvider } from './context/cart_context'
import { FilterProvider } from './context/filter_context'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProductsProvider>
      <UtilsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </UtilsProvider>
    </ProductsProvider>
  </React.StrictMode>
)
