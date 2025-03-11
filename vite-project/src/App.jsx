import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Blog from './pages/Blog'
import About from './pages/About'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
      <div className="app-container">
        <Header/>
        <main>
          <div className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
            </Routes>
          </div>
        </main>
        <Footer/>
      </div>
    </BrowserRouter>

  )
}

export default App
