import Navbar from "@/components/Navbar/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection"
import Colleagues from "@/components/Colleagues/Colleagues";
import Card from "@/components/Card/Card";
import HowWeWork from "@/components/HowWeWorkSection/HowWeWork";
import NewsLatter from "@/components/NewsLatter/NewsLatter";
export default function Home() {
  return (
    <>
   
      <Navbar />

      <HeroSection />
      
      <Colleagues />
        
      <Card />
  
      <HowWeWork />
      
      <NewsLatter />
    </>
  )
}
