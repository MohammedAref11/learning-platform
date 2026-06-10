import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'

function WeekCard({ week }) {
  const cardRef = useRef(null)

  useEffect(() => {
    const card = cardRef.current
    
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        duration: 0.3,
        y: -10,
        boxShadow: '0 20px 40px rgba(0, 119, 188, 0.2)',
        ease: 'power2.out',
      })
    })

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        duration: 0.3,
        y: 0,
        boxShadow: '0 0px 0px rgba(0, 119, 188, 0)',
        ease: 'power2.out',
      })
    })
  }, [])

  return (
    <Link to={`/week/${week.number}`}>
      <div 
        ref={cardRef}
        className={`card p-2xl transition-all duration-300 cursor-pointer h-full flex flex-col ${
          week.completed ? 'border-success' : 'border-white border-opacity-10'
        }`}
      >
        <div className="flex items-start justify-between mb-md">
          <span className="text-3xl font-bold text-primary">Week {week.number}</span>
          {week.completed && (
            <div className="w-8 h-8 bg-success rounded-full flex items-center justify-center">
              <span className="text-white font-bold">✓</span>
            </div>
          )}
        </div>
        
        <h3 className="text-lg font-bold mb-md flex-grow">{week.title}</h3>
        
        <div className="flex gap-md items-center text-sm text-gray-400">
          <span>📚 Learn more</span>
          <span>→</span>
        </div>
      </div>
    </Link>
  )
}

export default WeekCard
