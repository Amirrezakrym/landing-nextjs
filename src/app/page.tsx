import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection"
import Colleagues from "@/components/Colleagues/Colleagues";
export default function Home() {
  return (
    <>
    <div className="bg-slate-900">
      <Navbar />

    </div>
      <div className="bg-slate-950 pb-10">
        <HeroSection />
      </div>

      
      <Colleagues />

    </>
  )
}
