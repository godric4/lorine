import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import { ProductsProvider } from './context/products_context'
import { UtilsProvider } from './context/utils_context'
import { CartProvider } from './context/cart_context'
import { FilterProvider } from './context/filter_context'
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from './context/user_context'


ReactDOM.createRoot(document.getElementById('root')).render(
 <Auth0Provider
  domain={import.meta.env.VITE_AUTH_CLIENT_DOMAIN}
  clientId={import.meta.env.VITE_AUTH_CLIENT_ID}
  authorizationParams={{
   redirect_uri: window.location.origin,
  }}
  cacheLocation="localstorage"
 >
  <UserProvider>
   <ProductsProvider>
    <FilterProvider>
     <CartProvider>
      <UtilsProvider>
       <App />
      </UtilsProvider>
     </CartProvider>
    </FilterProvider>
   </ProductsProvider>
  </UserProvider>
 </Auth0Provider>
)
