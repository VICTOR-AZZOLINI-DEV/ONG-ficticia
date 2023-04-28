/* eslint-disable react/react-in-jsx-scope */
import HeroSection from "@/components/heroSection/HeroSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`pt-[5rem] ${inter.className}`}>
      <HeroSection />
    </main>
  );
}
