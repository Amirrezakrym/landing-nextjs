import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection"
export default function Home() {
  return (
    <div className="container mx-auto">
      <Navbar />
      <div className="flex mx-auto px-12 py-4 bg-slate-950">
        <HeroSection />
      </div>
    </div>

  )
}
