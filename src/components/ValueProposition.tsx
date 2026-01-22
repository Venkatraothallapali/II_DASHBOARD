import type { FC } from 'react'
import { useEffect, useRef } from 'react'
import './ValueProposition.css'

const ValueProposition: FC = () => {
  const scrollingText = 'Cutting-Edge AI Solutions to Power Modern Enterprises'
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      // Force video to play immediately
      video.play().catch(() => {
        // If autoplay fails, try again after a short delay
        setTimeout(() => {
          video.play().catch(() => {})
        }, 100)
      })
      
      // Hide blue background once video can play
      const handleCanPlay = () => {
        video.style.opacity = '1'
        const section = video.closest('.value-proposition')
        if (section) {
          section.classList.add('video-ready')
        }
      }
      
      video.addEventListener('canplay', handleCanPlay, { once: true })
      
      // Also handle loadeddata for faster response
      const handleLoadedData = () => {
        video.style.opacity = '1'
        const section = video.closest('.value-proposition')
        if (section) {
          section.classList.add('video-ready')
        }
      }
      
      video.addEventListener('loadeddata', handleLoadedData, { once: true })
      
      return () => {
        video.removeEventListener('canplay', handleCanPlay)
        video.removeEventListener('loadeddata', handleLoadedData)
      }
    }
  }, [])

  return (
    <section id="who-we-are" className="value-proposition">
      <div className="value-proposition-background">
        <video
          ref={videoRef}
          className="value-proposition-bg-video"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        >
          <source
            src="/assets/Complaint Site selection_vid.mp4"
            type="video/mp4"
          />
        </video>
        <div className="value-proposition-overlay"></div>
      </div>
      <div className="value-proposition-container">
        <div className="value-proposition-marquee-wrapper">
          <div className="value-proposition-marquee">
            <span className="value-marquee-text">{scrollingText}</span>
            <span className="value-marquee-separator"> • </span>
            <span className="value-marquee-text">{scrollingText}</span>
            <span className="value-marquee-separator"> • </span>
            <span className="value-marquee-text">{scrollingText}</span>
            <span className="value-marquee-separator"> • </span>
            <span className="value-marquee-text">{scrollingText}</span>
          </div>
        </div>
        <p className="section-description">
          IndustryIceberg builds AI-driven platforms that help organizations improve compliance, 
          automate complex workflows, and make confident, data-backed decisions across regulated industries.
        </p>
      </div>
    </section>
  )
}

export default ValueProposition
