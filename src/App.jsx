import React from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header, Navbar } from './components'
import { Homepage } from './pages'


const App = () => {
 return (
  <>
   <Router>
    <Header />
    {/* <Navbar /> */}
    <Routes>
     <Route exact path="/" element={<Homepage />} />
    </Routes>
   </Router>
  </>
 )
}

export default App
