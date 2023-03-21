import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Footer, Header, Navbar } from './components'
import { ErrorPage, Homepage } from './pages'


const App = () => {
 return (
  <>
   <Router>
    <Navbar />
    <Routes>
     <Route exact path="/" element={<Homepage />} />
     <Route path="*" element={<ErrorPage />} />
    </Routes>
    <Footer />
   </Router>
  </>
 )
}

export default App
