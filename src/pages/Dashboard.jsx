import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import WeekCard from '../components/WeekCard'

function Dashboard() {
  const [completedWeeks, setCompletedWeeks] = React.useState([1])
  const containerRef = useRef(null)

  useEffect(() => {
    gsap.from(containerRef.current, {
      duration: 0.8,
      opacity: 0,
      y: 20,
      ease: 'power2.out',
    })
  }, [])

  const weeks = Array.from({ length: 14 }, (_, i) => ({
    number: i + 1,
    title: [
      'JavaScript Engine Fundamentals',
      'Dynamic DOM Manipulation',
      'Asynchronous JavaScript',
      'Manifest V3 Architecture',
      'Local-First Storage Engines',
      'Background Service Workers',
      'Chrome SidePanel UI',
      'Tailwind CSS & Layout',
      'Google Gen AI SDK',
      'Security Hardening',
      'Supabase Identity',
      'Stripe Checkout',
      'Chrome Web Store SEO',
      'Build & Submission'
    ][i],
    completed: completedWeeks.includes(i + 1),
  }))

  return (
    <div className="pt-20 min-h-screen bg-surface">
      <div className="section-container py-3xl">
        <div ref={containerRef}>
          {/* Header */}
          <div className="mb-3xl">
            <h1 className="text-5xl font-bold mb-md text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Learning Dashboard</h1>
            <p className="text-gray-300 text-lg">Your 14-week journey to mastering Chrome extension development</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-3xl card">
            <div className="flex justify-between items-center mb-md">
              <h3 className="text-xl font-bold">Overall Progress</h3>
              <span className="text-2xl font-bold text-primary">{Math.round((completedWeeks.length / 14) * 100)}%</span>
            </div>
            <div className="w-full bg-white bg-opacity-10 rounded-full h-3 overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                style={{ width: `${(completedWeeks.length / 14) * 100}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-400 mt-md">Week {completedWeeks.length} of 14 completed</p>
          </div>

          {/* Weeks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-xl">
            {weeks.map((week) => (
              <WeekCard key={week.number} week={week} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
