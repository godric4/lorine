import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Navbar, Sidebar, Footer } from './components'
import { Errorpage, Homepage } from './pages'

function App() {
  return (
    <div className=''>
      <Router>
        <Navbar />
        <Sidebar />
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='*' element={<Errorpage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
