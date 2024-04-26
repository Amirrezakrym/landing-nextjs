import React from "react";
import Image from "next/image";
const HowWeWork = () => {
   return (
      <>
      <div className="bg-zinc-950">
      <div className="pt-[3rem] md:pt[5rem] pb-[5rem] container mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-2">

            <div className="bg-[url('../../public/images/back-img.png')] bg-center bg-no-repeat bg-cover md:bg-contain">
                  <div className="flex justify-center items-center mx-auto w-[350px] h-[350px] lg:w-[400px] lg:h-[400px] ">
                     <Image
                     className=""
                     src="/images/How-work.svg"
                     alt="herp image"
                     width={600}
                     height={600}
                     />
                  </div>
            </div>

            <div className="flex flex-col mt-10 md:mt-0">
               <div className="flex flex-col justify-center items-center md:items-start md:ml-10">
                  <div className="flex justify-center items-center">
                     <span className="uppercase text-teal-400 text-[0.7rem] font-thin mr-1 tracking-[3px]">
                        How we Work
                     </span>
                     <Image className="" src="/images/logo.png" width={40} height={40} alt="logo" />
                  </div>
                  <div className="text-center md:text-start text-white text-2xl lg:text-3xl  font-bold ">
                     Making Your Projects <span className="block">Look Awesome</span>
                  </div>
               </div>

               <div className="flex flex-col mt-5">
                  <div className="flex mx-auto md:mx-0 justify-start items-center w-4/5 rounded-full bg-teal-600 transition ease-in hover:scale-105 my-3 p-2 md:p-3">
                     <span className="bg-slate-400 inline-flex justify-center items-center w-6 h-6 rounded-full p-4 lg:p-6 font-bold text-xl lg:text-2xl text-white ml-2">
                        1
                     </span>
                     <p className="inline-block ml-7 text-white font-normal text-sm lg:text-xl">Full service range including</p>
                  </div>
                  <div className="flex mx-auto md:mx-0 justify-start items-center w-4/5 rounded-full hover:bg-blue-900 transition ease-in hover:scale-105 my-3 p-2 md:p-3">
                     <span className="bg-blue-600 inline-flex justify-center items-center w-6 h-6 rounded-full p-4 lg:p-6 font-bold text-xl lg:text-2xl text-white ml-2">
                        2
                     </span>
                     <p className="inline-block ml-7 text-white font-normal text-sm lg:text-xl">Technical skills,design,business</p>
                  </div>
                  <div className="flex mx-auto md:mx-0 justify-start items-center w-4/5 rounded-full hover:bg-yellow-700 transition ease-in hover:scale-105 my-3 p-2 md:p-3">
                     <span className="bg-yellow-500 inline-flex justify-center items-center w-6 h-6 rounded-full p-4 lg:p-6 font-bold text-xl lg:text-2xl text-white ml-2">
                        3
                     </span>
                     <p className="inline-block ml-7 text-white font-normal text-sm lg:text-xl">Themeslves in the merchants</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
      </div>
      </>
   );
};

export default HowWeWork;
