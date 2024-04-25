import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection"
import Colleagues from "@/components/Colleagues/Colleagues";
import Card from "@/components/Card/Card";
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
      
      <div className="bg-[#121212]">
      <Card />
      </div>
    </>
  )
}
