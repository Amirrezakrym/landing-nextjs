import React from "react";

const NewsLatter = () => {
   return (
      <div className="bg-[url('../../public/images/Newslatter.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="w-full h-3 bg-slate-900"></div>
         <div className="pt-[3rem] md:pt[5rem] pb-[5rem] container mx-auto">
            <div className="flex flex-col justify-center items-center gap-6 font-sans">
               <div>
                  <h1 className="font-bold text-xl sm:text-3xl md:text-4xl text-white">Sign Up for Update & Newslatter</h1>
               </div>
               <div>
                  <p className="text-white text-[13px] sm:text-sm">Your information will be safe,so dont worry</p>
               </div>

               <div className="w-4/5 md:w-2/4">

                  <form className="mx-auto form">
                     
                     <div className="relative w-4/5 sm:w-3/4 mx-auto">         
                        <input
                           type="email"
                           className="block w-full mx-auto p-4 sm:p-5 text-sm text-white font-bold rounded-2xl bg-teal-400"
                           placeholder="Email Address"
                           required
                        />
                        <button
                           type="submit"
                           className="text-white absolute right-3 bottom-2.5 bg-yellow-400 focus:outline-none font-medium rounded-xl text-sm px-3 py-2 sm:px-4 sm:py-3"
                        >
                           Subscribe
                        </button>
                     </div>
                  </form>

               </div>
            </div>
         </div>
         <div className="w-full h-3 bg-slate-900"></div>
      </div>
   );
};

export default NewsLatter;
