'use client'

import React from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

interface NanoButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode
}

export function NanoButton({ children, ...props }: NanoButtonProps) {
  return (
    <motion.button 
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center justify-center p-[2px] rounded-full overflow-hidden" 
      {...props}
    >
      <span className="absolute inset-x-0 bottom-0 h-full w-full bg-gradient-to-r from-neutral-300 via-white to-neutral-300 animate-[spin_4s_linear_infinite]" />
      <span className="relative flex items-center justify-center bg-black px-8 py-4 rounded-full transition-all duration-300 group-hover:bg-opacity-90">
        <span className="text-white font-medium tracking-wide flex items-center gap-2">
          {children}
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </span>
      </span>
    </motion.button>
  )
}
