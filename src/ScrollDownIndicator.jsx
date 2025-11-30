import { useState, useEffect } from 'react'

export function ScrollDownIndicator({ targetElementId }) {
  const [isVisible, setIsVisible] = useState(true)

  const handleScroll = () => {
    const targetElement = document.getElementById(targetElementId)

    if (!targetElement) {
      setIsVisible(false)
      return
    }

    // Get the element's bottom position relative to the viewport
    const rect = targetElement.getBoundingClientRect()
    const elementBottom = rect.bottom

    // Hide the arrow once the bottom of the target element scrolls past the top
    if (elementBottom <= 0) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [targetElementId])

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        left: '50%',
        transform: 'translateX(-50%)',
        opacity: isVisible ? 1 : 0,
        transition: 'opacity 0.5s ease-in-out',
        pointerEvents: isVisible ? 'auto' : 'none',
        zIndex: 100,
        cursor: 'pointer',
      }}
      onClick={() => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
      }}
      aria-label="Scroll down"
    >
      <svg
        width="40"
        height="40"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        style={{
          color: 'rgba(0, 217, 255, 0.8)',
          filter: 'drop-shadow(0 0 8px rgba(0, 217, 255, 0.4))',
          animation: 'bounce-down 2s ease-in-out infinite',
        }}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </div>
  )
}
