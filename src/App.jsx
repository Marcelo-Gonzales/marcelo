import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import CustomNavbar from './components/CustomNavBar'

function App() {

  return (
    <>
      <CustomNavbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
    </>
  );
}

export default App
