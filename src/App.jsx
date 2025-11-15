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
        <Routes>
          <Route to='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
