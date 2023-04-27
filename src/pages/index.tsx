/* eslint-disable react/react-in-jsx-scope */
import HeroSection from '@/components/hero-section/HeroSection'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <main
        className={`pt-[5rem] ${inter.className}`}
      >
        <HeroSection/>
      </main>
    </div>
  )
}