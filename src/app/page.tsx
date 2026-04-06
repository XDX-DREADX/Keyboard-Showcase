import ProductCanvas from '@/components/ProductCanvas'
import SpecGrid from '@/components/SpecGrid'
import { NanoButton } from '@/components/ui/NanoBanana'

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-neutral-800 selection:text-white">
      {/* Hero / Scrollytelling Section */}
      <ProductCanvas />

      {/* Specifications Section */}
      <SpecGrid />

      {/* Call to Action */}
      <section className="py-32 px-4 bg-gradient-to-t from-neutral-900 to-black text-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/5 blur-[150px] pointer-events-none rounded-full" />
        </div>
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to Elevate Your Typing?</h2>
          <p className="text-neutral-400 text-xl font-light mb-12 max-w-2xl mx-auto">
            Pre-order now to secure your unit from the first production run.
          </p>
          <NanoButton>Pre-Order Now</NanoButton>
        </div>
      </section>
    </main>
  )
}
