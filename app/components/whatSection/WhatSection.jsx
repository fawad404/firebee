import Image from 'next/image'
import React from 'react'

const WhatSection = () => {
  return (
    <div className="flex flex-col items-center p-6 py-8 bg-white">
 
  <h2 className="text-3xl md:text-7xl text-gray-800 mb-6 text-center">
    What will Firebee do for me?
  </h2>
  <p className="text-xl md:text-2xl text-gray-500 mb-8 text-center">
    Firebee will help you gently nudge yourself into a different mental state
  </p>


  <div className="flex flex-col lg:flex-row items-center justify-center">
   
    <div className="mb-6 lg:mb-0 lg:mr-8">
    <Image 
  src="/_DP_1653 2.png" 
  alt="Person wearing device" 
  width={400}  // example width
  height={300} // example height
  className="rounded-lg object-cover md:rounded-xl"
  style={{ height: 'auto' }} // Let the height adjust according to width if needed
/>
    </div>

  
    <div className="space-y-4">
      <div className="flex items-center">
        <img className='h-8 w-8 mr-4' src="/icons8-tick-48.png" alt="" />
        <p className="text-gray-700 text-xl">
          Can’t sleep? Turn on the <span className="font-bold text-xl text-[#2E034B]">deep sleep</span> signal
        </p>
      </div>
      <div className="flex items-center">
        <img className='h-8 w-8 mr-4' src="/icons8-tick-48.png" alt="" />
        <p className="text-gray-700 text-xl">
          Feeling tired? Turn on the <span className="font-bold text-xl text-[#FF225E]">alert</span> signal
        </p>
      </div>
      <div className="flex items-center">
        <img className='h-8 w-8 mr-4' src="/icons8-tick-48.png" alt="" />
        <p className="text-gray-700 text-xl">
          Feeling anxious? Turn on the <span className="font-semibold text-[#8BF2B5]">calm</span> signal
        </p>
      </div>
      <div className="flex items-center">
        <img className='h-8 w-8 mr-4' src="/icons8-tick-48.png" alt="" />
        <p className="text-gray-700 text-xl">
          Feeling unproductive? Turn on the <span className="font-semibold text-[#E280DA]">focus</span> signal
        </p>
      </div>
      <div className="flex items-center">
        <img className='h-8 w-8 mr-4' src="/icons8-tick-48.png" alt="" />
        <p className="text-gray-700 text-xl">
          Feeling blue? Turn on the <span className="font-semibold text-[#A34D9F]">happy</span> signal
        </p>
      </div>
    </div>
  </div>
</div>

  )
}

export default WhatSection
