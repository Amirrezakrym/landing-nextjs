import React from 'react'

const CounterSection = () => {
  return (
    <div className='container bg-gray-700 mx-auto '>
        <div className='grid grid-cols-3 border-2 rounded text-white font-sans'>
        
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
  )
}

export default CounterSection