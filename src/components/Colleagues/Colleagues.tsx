import React from 'react'
import Image from 'next/image'
import CounterSection from './CounterSection'
const Colleagues = () => {
  return (
    <div className='bg-neutral-900'>
        <div className='relative sm:-top-7  md:-top-10 lg:-top-12'>
        <CounterSection />

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
  )
}

export default Colleagues