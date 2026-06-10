import { useState, useRef } from 'react'
import { gsap } from 'gsap'

function CodeBlock({ language = 'javascript', code }) {
  const [copied, setCopied] = useState(false)
  const copyButtonRef = useRef(null)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    
    // Animate button
    gsap.to(copyButtonRef.current, {
      duration: 0.3,
      scale: 0.95,
      ease: 'power2.out',
    })

    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <div className="relative bg-black bg-opacity-50 rounded-md overflow-hidden border border-white border-opacity-10">
      <div className="absolute top-0 right-0 p-md flex gap-md">
        <span className="text-xs text-gray-400 font-mono">{language}</span>
        <button
          ref={copyButtonRef}
          onClick={handleCopy}
          className="text-xs bg-primary bg-opacity-20 text-primary px-md py-sm rounded hover:bg-opacity-30 transition-colors duration-200 font-bold"
        >
          {copied ? '✓ Copied' : 'Copy'}
        </button>
      </div>
      
      <pre className="p-xl pt-3xl text-sm text-gray-300 overflow-x-auto font-mono leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default CodeBlock
