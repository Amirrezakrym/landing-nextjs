import React from "react";
import Image from "next/image";
import Link from 'next/link';
// icons
import { AiFillInstagram, AiOutlineTwitter, AiFillSmile, AiFillHtml5, AiFillCrown } from "react-icons/ai";
import { FcOk } from "react-icons/fc";

export default function Home() {
  return (
    <>
      {/* HeroSection */}
      <div className="bg-zinc-950 pb-10">
        <div className="container flex mx-auto px-10 py-4">
          <div className="grid grid-cols-1 sm:grid-cols-12 bg-[url('../../public/images/back-img.png')] bg-bottom md:bg-right bg-no-repeat bg-contain">

            <div className="col-span-7  place-self-center text-center sm:text-left">

              <div className="text-white col-span-2  my-5">
                <button className="mr-3 bg-yellow-600 text-black rounded-full p-3 text-3xl border-2 transition ease-in hover:scale-110"><AiFillInstagram /></button>
                <button className="mx-3 bg-teal-400 text-white rounded-full p-3 text-3xl border-2 transition ease-in hover:scale-110"><AiOutlineTwitter /></button>
              </div>

              <h1 className="font-sans text-white mb-4 text-3xl sm:text-5xl lg:text-6xl font-bold">
                Make Digital Product With Our Agency
              </h1>

              <p className="text-slate-300 text-base sm:text-lg mb-6 lg:text-lg">
                Support small business and join the nationwide movement to encourage commercial support.
              </p>

              <div className="flex justify-center md:justify-start">
                <button className="text-white text-sm bg-teal-400 border-2 px-6 md:px-10 py-2 md:py-4 font-bold  rounded-full mr-4 hidden sm:block  after:bg-teal-700  p-3  z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:font-bold ">Contact Us</button>
                <div className=" bg-white text-black pr-7 md:pr-9 py-1 md:py-2 pl-2  rounded-full inline-flex justify-around items-center  after:bg-zinc-400 font-medium p-3 px-5  z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:right-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 hover:font-bold ">


                  <button className=" bg-slate-300 text-black rounded-full p-2 text-xl"><FcOk /></button>


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



      {/* Colleagues */}

      <div className='bg-neutral-900'>
        <div className='relative sm:-top-7  md:-top-10 lg:-top-12'>
          <div className='container mx-auto '>
            <div className='grid grid-cols-3 border-2 bg-neutral-800 rounded text-white font-sans w-4/5 md:w-auto mx-auto'>

              <div className='col-span-12 sm:col-auto flex flex-col border-b sm:border-b-0 sm:border-r pl-8 p-6 items-center sm:items-start'>
                <p className='text-2xl md:text-4xl font-bold relative'>10 <span className='absolute -right-6 -top-3'>+</span> </p>
                <p className='pt-2'>Years of experience</p>
              </div>
              <div className='col-span-12 sm:col-auto flex flex-col border-b sm:border-b-0 sm:border-r  pl-8 p-6 items-center sm:items-start'>
                <p className='text-2xl md:text-4xl font-bold relative'>100 <span className='absolute'>+</span> </p>
                <p className='pt-2'>Agency members</p>
              </div>
              <div className='col-span-12 sm:col-auto flex flex-col  pl-8 p-6 items-center sm:items-start'>
                <p className='text-2xl md:text-4xl font-bold relative'>4580 <span className='absolute'>+</span> </p>
                <p className='pt-2'>Project complete</p>
              </div>

            </div>
          </div>

        </div>

        <div className='container mx-auto mt-14 '>
          <div className='flex justify-center items-center flex-wrap sm:flex-nowrap'>
            <div className='p-2 sm:p-4 md:p-5 mb-5'>
              <Image
                src="/images/icon.svg"
                alt='icon'
                width={300}
                height={300}
              />

            </div>
            <div className='p-2 sm:p-4 md:p-5 mb-5'>
              <Image
                src="/images/icon.svg"
                alt='icon'
                width={300}
                height={300}
              />

            </div>
            <div className='p-2 sm:p-4 md:p-5 mb-5 hidden sm:block'>
              <Image
                src="/images/icon.svg"
                alt='icon'
                width={300}
                height={300}
              />

            </div>
            <div className='p-2 sm:p-4 md:p-5 mb-5 hidden sm:block'>
              <Image
                src="/images/icon.svg"
                alt='icon'
                width={300}
                height={300}
              />

            </div>
          </div>
        </div>
      </div>






      {/* Card */}

      <div className="bg-zinc-950">
        <div className='pt-[4rem] md:pt[8rem] pb-[5rem] container mx-auto'>
          <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
              <span className='uppercase text-teal-400 text-[0.7rem] font-thin mr-1 tracking-[3px]'>service</span>
              <Image className="" src="/images/logo.png" width={40} height={40} alt="logo" />
            </div>
            <div className='text-center text-white text-2xl  font-bold '>
              How Our Agency <br /> Can Help
            </div>

          </div>

          <div className='grid grid-cols-1 md:flex  mx-auto  mt-[4rem] text-white '>
            <div>
              <div className='w-4/5 md:w-auto mx-auto font-semibold text-center md:text-start p-[2rem] font-sans border md:border-r-0 rounded'>
                <button className="mr-3 bg-blue-700 text-white rounded-full p-3 text-4xl transition ease-in hover:scale-110"><AiFillSmile /></button>
                <h1 className='text-xl mt-[1.5rem] mb-[1.5rem] font-bold'>
                  Design
                </h1>
                <p className='text-xs text-slate-400 font-normal'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi delectus cupiditate corrupti placeat magnam quibusdam?
                </p>
                <Link href={"#"} className='mt-7 block'>
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <div className='w-4/5 md:w-auto mx-auto font-semibold text-center md:text-start p-[2rem] font-sans border md:border-none rounded my-5 md:m-0 bg-teal-600 '>
                <button className="mr-3 bg-white text-teal-600 rounded-full p-3 text-4xl transition ease-in hover:scale-110"><AiFillHtml5 /></button>
                <h1 className='text-xl mt-[1.5rem] mb-[1.5rem] font-bold'>
                  Development
                </h1>
                <p className='text-xs text-slate-400 font-normal'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi delectus cupiditate corrupti placeat magnam quibusdam?
                </p>
                <Link href={"#"} className='mt-7 block'>
                  Learn More
                </Link>
              </div>
            </div>
            <div>
              <div className='w-4/5 md:w-auto mx-auto font-semibold text-center md:text-start p-[2rem] font-sans border md:border-l-0 rounded'>
                <button className="mr-3 bg-yellow-600 text-white rounded-full p-3 text-4xl transition ease-in hover:scale-110"><AiFillCrown /></button>
                <h1 className='text-xl mt-[1.5rem] mb-[1.5rem] font-bold'>
                  Marketing
                </h1>
                <p className='text-xs text-slate-400 font-normal'>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi delectus cupiditate corrupti placeat magnam quibusdam?
                </p>
                <Link href={"#"} className='mt-7 block'>
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HowWeWork  */}
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

            <div 
            

            className="flex flex-col mt-10 md:mt-0">
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

      {/* NewsLatter */}
      <div
      className=" bg-[url('../../public/images/Newslatter.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="w-full h-3 bg-zinc-900"></div>
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
                    className="block w-full mx-auto p-4 sm:p-5 text-sm text-white font-bold rounded-2xl bg-teal-400 focus:outline-none focus:bg-teal-600"
                    placeholder="Email Address"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-3 bottom-2.5 bg-yellow-400 focus:outline-none font-medium rounded-xl text-sm px-3 py-2 sm:px-4 sm:py-3   after:bg-amber-700 p-3 z-30 after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700 "
                  >
                    Subscribe
                  </button>
                </div>
              </form>

            </div>
          </div>
        </div>
        <div className="w-full h-3 bg-zinc-900"></div>
      </div>

      {/* ContactUs */}
      <div className="bg-zinc-950">
        <div className="pt-[3rem] md:pt[5rem] pb-[3rem] container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <div className="flex justify-center items-center mx-auto w-[300px] h-[300px]  md:w-[380px] md:h-[500px] lg:w-[490px] lg:h-[520px] ">
                <Image
                  className=""
                  src="/images/Contact.svg"
                  alt="herp image"
                  width={600}
                  height={600}
                />
              </div>
            </div>
            <div className="flex flex-col mt-10 md:mt-0">
              <div className="flex flex-col justify-center items-center md:items-start">
                <div className="flex justify-center items-center">
                  <span className="uppercase text-teal-400 text-[0.7rem] font-thin mr-1 tracking-[3px]">
                    How we Work
                  </span>
                  <Image className="" src="/images/logo.png" width={40} height={40} alt="logo" />
                </div>
                <div className="text-center md:text-start text-white text-2xl lg:text-3xl  font-bold ">
                  Have a Project in mind? <span className="block">Let,s get to work</span>
                </div>
              </div>


              <div className='mt-10 text-center md:text-start'>
                <div className="mt-2">
                  <label className="block text-white font-semibold text-sm mb-3 w-4/5 text-start mx-auto md:mx-0">Full Name</label>
                  <input
                    type="text"
                    className="bg-[#292929] text-white px-6 py-3 cursor-pointer focus:outline-none w-4/5"
                    placeholder="Input Your Name"
                  />
                </div>

                <div className="mt-7">
                  <label className="block text-white font-semibold text-sm mb-3 w-4/5 text-start mx-auto md:mx-0">Massage</label>
                  <textarea

                    rows={8}
                    placeholder="Whrite Massage..."
                    className="bg-[#292929] resize-none text-white px-6 py-3 cursor-pointer focus:outline-none w-4/5 max-h-[8rem]"
                  />
                </div>
                <div className='mt-5 w-4/5 text-start mx-auto md:mx-0" md:w-full'>
                  <button className="text-white text-sm bg-teal-400 border-2 px-6 md:px-10 py-2 md:py-4 font-bold  rounded-full mr-4  after:bg-teal-700 p-3 z-30 relative  after:-z-20 after:absolute after:h-1 after:w-1  after:left-5 overflow-hidden after:bottom-0 after:translate-y-full after:rounded-md after:hover:scale-[300] after:hover:transition-all after:hover:duration-700 after:transition-all after:duration-700 transition-all duration-700">Send Massage</button>

                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
