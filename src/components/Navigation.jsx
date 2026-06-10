import { useState } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface bg-opacity-95 backdrop-blur-sm border-b border-white border-opacity-10">
      <div className="section-container flex justify-between items-center h-20">
        <Link to="/" className="flex items-center gap-md">
          <div className="w-12 h-12 bg-primary rounded-md flex items-center justify-center">
            <span className="text-white font-bold text-xl">LP</span>
          </div>
          <span className="text-xl font-bold text-primary hidden md:block">Learning Platform</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-2xl">
          <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors duration-200">Dashboard</Link>
          <a href="#resources" className="hover:text-primary transition-colors duration-200">Resources</a>
          <button className="btn-primary">Sign In</button>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={handleNavClick} className="md:hidden flex flex-col gap-sm">
          <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
          <div className={`w-6 h-0.5 bg-primary transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-surface border-t border-white border-opacity-10 p-xl flex flex-col gap-md">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link>
          <a href="#resources" className="hover:text-primary transition-colors">Resources</a>
          <button className="btn-primary w-full">Sign In</button>
        </div>
      )}
    </nav>
  )
}

export default Navigation
