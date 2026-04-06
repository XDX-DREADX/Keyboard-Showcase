'use client'

import { motion, MotionValue, useTransform } from 'framer-motion'

interface OverlayProps {
  progress: MotionValue<number>
}

export default function Overlay({ progress }: OverlayProps) {
  // Section 1: 0% to 25% (fade out by 30%)
  const opacity1 = useTransform(progress, [0, 0.15, 0.25], [1, 1, 0])
  const y1 = useTransform(progress, [0, 0.25], [0, -100])

  // Section 2: 30% to 55%
  const opacity2 = useTransform(progress, [0.25, 0.3, 0.5, 0.55], [0, 1, 1, 0])
  const x2 = useTransform(progress, [0.25, 0.55], [-50, 0])

  // Section 3: 60% and beyond
  const opacity3 = useTransform(progress, [0.55, 0.65, 0.9, 1], [0, 1, 1, 0])
  const x3 = useTransform(progress, [0.55, 1], [50, 0])

  return (
    <div className="absolute inset-0 z-10 pointer-events-none">
      {/* Section 1: Center */}
      <motion.div 
        style={{ opacity: opacity1, y: y1 }}
        className="absolute inset-x-0 top-1/4 flex items-center justify-center text-center px-4"
      >
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white drop-shadow-xl mb-4">
            Experience Innovation.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">
              Assembled.
            </span>
          </h1>
        </div>
      </motion.div>

      {/* Section 2: Left */}
      <motion.div 
        style={{ opacity: opacity2, x: x2 }}
        className="absolute inset-y-0 left-0 flex items-center px-8 md:px-24 w-full md:w-1/2"
      >
        <div className="max-w-xl backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Precision engineering.
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
            Every component, perfect. Machined to exacting standards to provide the ultimate tactile experience.
          </p>
        </div>
      </motion.div>

      {/* Section 3: Right */}
      <motion.div 
        style={{ opacity: opacity3, x: x3 }}
        className="absolute inset-y-0 right-0 flex items-center justify-end px-8 md:px-24 w-full md:w-1/2 text-right"
      >
        <div className="max-w-xl backdrop-blur-md bg-black/20 p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            The final form.
          </h2>
          <p className="text-lg md:text-xl text-neutral-300 font-light leading-relaxed">
            Harmony on the clouds. A symphony of sound and feel in every keystroke.
          </p>
        </div>
      </motion.div>
    </div>
  )
}
