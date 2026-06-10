import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

function Section({ title, emoji, children }) {
  const sectionRef = useRef(null)

  useEffect(() => {
    gsap.from(sectionRef.current, {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 80%',
      },
      duration: 0.6,
      opacity: 0,
      y: 20,
      ease: 'power2.out',
    })
  }, [])

  return (
    <div ref={sectionRef} className="card p-2xl border border-white border-opacity-10">
      <div className="flex items-center gap-md mb-xl">
        <span className="text-4xl">{emoji}</span>
        <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
          {title}
        </h2>
      </div>
      {children}
    </div>
  )
}

export default Section
