import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Dashboard from './pages/Dashboard'
import Week1 from './pages/Week1'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface text-text">
        <Navigation />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/week/1" element={<Week1 />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
