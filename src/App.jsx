import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components'
import {
 AboutPage,
 CartPage,
 ContactPage,
 ErrorPage,
 Homepage,
 ProductsPage,
 SingleProductPage,
 CheckoutPage,
 PrivateRoute,
 AuthWrapper
} from './pages'


const App = () => {
 return (
  <>
   <AuthWrapper>
    <Router>
     <Navbar />
     <Sidebar />
     <Routes>
      <Route exact path="/" element={<Homepage />} />
      <Route path="*" element={<ErrorPage />} />
      <Route exact path="/contact" element={<ContactPage />} />
      <Route exact path="/about" element={<AboutPage />} />
      <Route exact path="/products" element={<ProductsPage />} />
      <Route path='products/:id' element={<SingleProductPage />} />
      <Route exact path="/cart" element={<CartPage />} />
      <Route
       path='/checkout'
       element={
        <PrivateRoute>
         <CheckoutPage />
        </PrivateRoute>
       }
      />
     </Routes>
     <Footer />
    </Router>
   </AuthWrapper>
  </>
 )
}

export default App
