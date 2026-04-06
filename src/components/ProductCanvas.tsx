'use client'

import { useEffect, useRef, useState } from 'react'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import Overlay from './Overlay'

const FRAME_COUNT = 121

const getCurrentFrame = (index: number) => {
  return `/sequence/frame_${index.toString().padStart(3, '0')}_delay-0.066s.webp`
}

export default function ProductCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [images, setImages] = useState<HTMLImageElement[]>([])
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end']
  })

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = []
    let loadedCount = 0

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = new Image()
      img.src = getCurrentFrame(i)
      img.onload = () => {
        loadedCount++
        if (loadedCount === FRAME_COUNT) {
          setImages(loadedImages)
        }
      }
      loadedImages.push(img)
    }
  }, [])

  const renderFrame = (index: number) => {
    if (images.length === 0 || !canvasRef.current) return
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    if (!context) return

    const image = images[index]
    if (!image) return

    const canvasRatio = canvas.width / canvas.height
    const imageRatio = image.width / image.height

    let renderWidth = canvas.width
    let renderHeight = canvas.height
    let offsetX = 0
    let offsetY = 0

    // Object-fit: cover logic
    if (imageRatio > canvasRatio) {
      renderWidth = canvas.height * imageRatio
      offsetX = (canvas.width - renderWidth) / 2
    } else {
      renderHeight = canvas.width / imageRatio
      offsetY = (canvas.height - renderHeight) / 2
    }

    context.clearRect(0, 0, canvas.width, canvas.height)
    context.drawImage(image, offsetX, offsetY, renderWidth, renderHeight)
  }

  // Initial draw and resize handler
  useEffect(() => {
    if (images.length === 0 || !canvasRef.current) return

    const handleResize = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      renderFrame(Math.round(scrollYProgress.get() * (FRAME_COUNT - 1)))
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images])

  // Scrub through animation on scroll
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (images.length === 0) return
    
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.floor(latest * FRAME_COUNT)
    )
    
    requestAnimationFrame(() => renderFrame(frameIndex))
  })

  return (
    <div ref={containerRef} className="relative h-[500vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {images.length < FRAME_COUNT && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black text-white">
            <div className="text-xl font-light tracking-widest animate-pulse">
              LOADING ASSETS...
            </div>
          </div>
        )}
        <canvas 
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <Overlay progress={scrollYProgress} />
      </div>
    </div>
  )
}
