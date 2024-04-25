import React from "react";
import Image from "next/image";
import { AiFillInstagram , AiOutlineTwitter } from "react-icons/ai";
import { FcOk } from "react-icons/fc";

const HeroSection = () => {
  return (
    <div className="bg-slate-950 pb-10">
    <div className="container flex mx-auto px-10 py-4">
      <div className="grid grid-cols-1 sm:grid-cols-12 bg-[url('../../public/images/back-img.png')] bg-bottom md:bg-right bg-no-repeat bg-contain">
        
        <div className="col-span-7  place-self-center text-center sm:text-left">
        
        <div className="text-white col-span-2  my-5">
          <button className="mr-3 bg-yellow-600 text-black rounded-full p-3 text-3xl border-2"><AiFillInstagram /></button>
          <button className="mx-3 bg-teal-400 text-white rounded-full p-3 text-3xl border-2"><AiOutlineTwitter/></button>
        </div>
          
          <h1 className="font-sans text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold">
            Make Digital Product With Our Agency
          </h1>

          <p className="text-slate-300 text-base sm:text-lg mb-6 lg:text-lg">
            Support small business and join the nationwide movement to encourage commercial support.
          </p>

          <div className="flex justify-center md:justify-start">
            <button className="text-white text-sm bg-teal-400 border-2 px-6 md:px-10 py-2 md:py-4 font-bold  rounded-full mr-4 hidden sm:block">Contact Us</button>
            <div className= " bg-white text-black pr-7 md:pr-9 py-1 md:py-2 pl-2  rounded-full inline-flex justify-around items-center ">
            
        
            <button className=" bg-slate-300 text-black rounded-full p-2 text-xl"><FcOk/></button>

             
              <div className="flex flex-col justify-self-center items-center ml-2">
                <span className="text-[9px]">Done Project</span>
                <span className="font-bold mt-1">4562 +</span>
              </div>

            </div>
          </div>

        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          
          <div className="w-[250px]  h-[250px] lg:w-[400px] lg:h-[600px] relative">
            <Image
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              src="/images/hero-image.svg"
              alt="herp image"
              width={600}
              height={600}
            />
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default HeroSection;
