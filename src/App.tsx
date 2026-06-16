import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Pain } from './components/Pain'
import { Pricing } from './components/Pricing'
import { Product } from './components/Product'

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Hero />
      <Pain />
      <Product />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  )
}
