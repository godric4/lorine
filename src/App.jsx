import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import {
  Aboutpage,
  Errorpage,
  Homepage,
  SingleProductPage,
  Contactpage,
} from './pages'

function App() {
  return (
    <div className=''>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<Errorpage />} />
          {/* <Route path='products' element={<Products />} /> */}
          <Route path='products/:id' element={<SingleProductPage />} />
          <Route path='/about' element={<Aboutpage />} />
          <Route path='/contact' element={<Contactpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
