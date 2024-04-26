import React from 'react'
import { AiFillInstagram , AiFillSmile,AiFillHtml5,AiFillCrown  } from "react-icons/ai";
import Image from 'next/image';
import Link from 'next/link';
const Card = () => {
  return (
<div className="bg-zinc-950">
    <div className='pt-[4rem] md:pt[8rem] pb-[5rem] container mx-auto'>
        <div className='flex flex-col justify-center items-center'>
            <div className='flex justify-center items-center'>
                <span className='uppercase text-teal-400 text-[0.7rem] font-thin mr-1 tracking-[3px]'>service</span>
                <Image className="" src="/images/logo.png" width={40} height={40} alt="logo" />
            </div>   
            <div  className='text-center text-white text-2xl  font-bold '>
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
  );
};

export default Card