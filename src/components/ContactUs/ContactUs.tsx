import React from 'react'
import Image from 'next/image'
const ContactUs = () => {
    return (
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
    )
}

export default ContactUs