import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'

function Hero() {
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const buttonsRef = useRef(null)
  const gridRef = useRef(null)

  useEffect(() => {
    // Animate title
    gsap.from(titleRef.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power2.out',
    })

    // Animate subtitle
    gsap.from(subtitleRef.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power2.out',
      delay: 0.2,
    })

    // Animate buttons
    gsap.from(buttonsRef.current, {
      duration: 1,
      opacity: 0,
      y: 30,
      ease: 'power2.out',
      delay: 0.4,
    })

    // Animate grid items
    const gridItems = gridRef.current?.querySelectorAll('.grid-item')
    gsap.from(gridItems, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      stagger: 0.1,
      ease: 'power2.out',
      delay: 0.6,
    })
  }, [])

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-surface via-surface to-black overflow-hidden">
      {/* Hero Section */}
      <div className="section-container text-center py-3xl md:py-5xl">
        <h1 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold mb-2xl text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary"
        >
          Master Chrome Extension Development
        </h1>
        
        <p 
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 mb-2xl max-w-3xl mx-auto leading-relaxed"
        >
          A comprehensive 14-week learning path from JavaScript fundamentals to publishing your extension on the Chrome Web Store. Learn through interactive lessons, real-world code examples, and hands-on projects.
        </p>

        <div ref={buttonsRef} className="flex flex-col md:flex-row gap-xl justify-center mb-3xl">
          <Link to="/dashboard" className="btn-primary text-lg px-2xl py-lg">
            Start Learning
          </Link>
          <button className="px-2xl py-lg bg-white bg-opacity-10 text-white rounded-md font-bold hover:bg-opacity-20 transition-all duration-200 border border-white border-opacity-20">
            View Roadmap
          </button>
        </div>
      </div>

      {/* Features Grid */}
      <div ref={gridRef} className="section-container grid grid-cols-1 md:grid-cols-3 gap-xl mb-3xl">
        <div className="grid-item card group hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-xl">📚</div>
          <h3 className="text-xl font-bold mb-md text-primary">14 Comprehensive Weeks</h3>
          <p className="text-gray-300">From JavaScript fundamentals to deployment. Each week builds on the previous one with clear learning objectives.</p>
        </div>

        <div className="grid-item card group hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-xl">💻</div>
          <h3 className="text-xl font-bold mb-md text-secondary">Hands-On Code</h3>
          <p className="text-gray-300">Real code examples, best practices, bad vs. good implementations, and error handling demonstrations.</p>
        </div>

        <div className="grid-item card group hover:scale-105 transition-transform duration-300">
          <div className="text-4xl mb-xl">🎯</div>
          <h3 className="text-xl font-bold mb-md text-success">Real-World Projects</h3>
          <p className="text-gray-300">Build a production-ready Chrome extension using modern tools: React, GSAP, Tailwind CSS, and Google APIs.</p>
        </div>
      </div>
    </div>
  )
}

export default Hero
