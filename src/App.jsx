import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Blog from './pages/Blog'
import Projects from './pages/Projects'
import CustomNavbar from './components/CustomNavbar'
import BlogPostContextProvider from './pages/BlogPostContextProvider'

function App() {

  return (
    <>
      <BlogPostContextProvider>
        <CustomNavbar/>
        <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </main>
          <footer>
            <p>&copy; Marcelo Gonzales</p>
          </footer>
      </BlogPostContextProvider>
    </>
  );
}

export default App
