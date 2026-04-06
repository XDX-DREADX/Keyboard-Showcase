'use client'

import { motion } from 'framer-motion'
import { Type, LayoutGrid, Volume2, ShieldCheck, Zap, Layers } from 'lucide-react'

const specs = [
  {
    icon: <LayoutGrid className="w-8 h-8 mb-4 text-neutral-300" />,
    title: '75% Compact Layout',
    description: 'Optimized space without sacrificing essential function keys or arrow clusters.'
  },
  {
    icon: <Type className="w-8 h-8 mb-4 text-neutral-300" />,
    title: 'Hot-Swappable Switches',
    description: 'Customize your typing experience instantly without any soldering required.'
  },
  {
    icon: <Volume2 className="w-8 h-8 mb-4 text-neutral-300" />,
    title: 'Programmable Rotary Knob',
    description: 'Tactile volume control and media scrubbing right at your fingertips.'
  },
  {
    icon: <Layers className="w-8 h-8 mb-4 text-neutral-300" />,
    title: 'Gasket Mount Structure',
    description: 'Providing a dampened, flexible, and premium typing sound and feel.'
  },
  {
    icon: <ShieldCheck className="w-8 h-8 mb-4 text-neutral-300" />,
    title: 'CNC Aluminum Case',
    description: 'Aerospace-grade aluminum body tailored with precision and elegance.'
  },
  {
    icon: <Zap className="w-8 h-8 mb-4 text-neutral-300" />,
    title: 'Tri-Mode Connectivity',
    description: 'Seamlessly switch between Bluetooth 5.0, 2.4GHz Wireless, and USB-C.'
  }
]

export default function SpecGrid() {
  return (
    <section className="relative bg-black min-h-screen py-24 px-4 overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neutral-900/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Uncompromising Specifications</h2>
          <p className="text-xl text-neutral-400 max-w-2xl mx-auto font-light">
            Engineered for enthusiasts who demand the absolute best in both form and function.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group relative backdrop-blur-xl bg-white/[0.02] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.04] transition-all duration-300 overflow-hidden"
            >
              {/* Subtle hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {spec.icon}
              <h3 className="text-2xl font-semibold text-white mb-3">{spec.title}</h3>
              <p className="text-neutral-400 font-light leading-relaxed">
                {spec.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
