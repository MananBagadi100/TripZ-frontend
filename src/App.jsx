import './Styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import AboutUs from './Components/AboutUs'
import AdminLogin from './Components/AdminLogin'
import AdminDashboard from './Components/AdminDashboard'
import TourDetails from './Components/TourDetails'

function App() {

  return (
    <div className="all-pages-main-container">
      <BrowserRouter>
        <Navbar />
        <div className="all-pages-content-area">
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/api/tours/:id' element={<TourDetails />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
