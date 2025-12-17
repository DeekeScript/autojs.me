import { useEffect, useRef } from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import './Home.css'

function Home() {
  const featureCardsRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1'
          entry.target.style.transform = 'translateY(0)'
        }
      })
    }, observerOptions)

    const cards = document.querySelectorAll('.feature-card')
    cards.forEach(card => {
      observer.observe(card)
    })

    return () => {
      cards.forEach(card => {
        observer.unobserve(card)
      })
    }
  }, [])

  return (
    <div className="home">
      <Hero />
      <Features />
    </div>
  )
}

export default Home

