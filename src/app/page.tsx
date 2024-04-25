import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection"
import Colleagues from "@/components/Colleagues/Colleagues";
import Card from "@/components/Card/Card";
import HowWeWork from "@/components/HowWeWorkSection/HowWeWork";
export default function Home() {
  return (
    <>
   
      <Navbar />

      <HeroSection />
      
      <Colleagues />
        
      <Card />
  
      <HowWeWork />
      
    </>
  )
}
