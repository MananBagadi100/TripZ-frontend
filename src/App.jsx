import { useState } from 'react'
import './Styles/App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'

function App() {

  return (
    <div className="all-pages-main-container">
      <BrowserRouter>
        <Navbar />
        <div className="all-pages-content-area">
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App
