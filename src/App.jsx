import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Footer, Navbar, Sidebar } from './components'
import {
 AboutPage,
 CartPage,
 ContactPage,
 ErrorPage,
 EventsPage,
 GalleryPage,
 Homepage,
 ProductsPage,
 SingleProductPage
} from './pages'


const App = () => {
 return (
  <>
   <Router>
    <Navbar />
    <Sidebar />
    <Routes>
     <Route exact path="/" element={<Homepage />} />
     <Route path="*" element={<ErrorPage />} />
     <Route exact path="/contact" element={<ContactPage />} />
     <Route exact path="/about" element={<AboutPage />} />
     <Route exact path="/events" element={<EventsPage />} />
     <Route exact path="/gallery" element={<GalleryPage />} />
     <Route exact path="/products" element={<ProductsPage />} />
     <Route path='products/:id' element={<SingleProductPage />} />
     <Route exact path="/cart" element={<CartPage />} />
    </Routes>
    <Footer />
   </Router>
  </>
 )
}

export default App
