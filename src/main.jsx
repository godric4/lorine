import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ProductsProvider } from './context/products_context'
import { UtilsProvider } from './context/utils_context'
import { CartProvider } from './context/cart_context'
import { FilterProvider } from './context/filter_context'

ReactDOM.createRoot(document.getElementById('root')).render(
 <React.StrictMode>
  <ProductsProvider>
   <FilterProvider>
    <CartProvider>
     <UtilsProvider>
      <App />
     </UtilsProvider>
    </CartProvider>
   </FilterProvider>
  </ProductsProvider>
 </React.StrictMode>,
)
