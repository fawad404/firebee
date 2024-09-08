import React from 'react';

const Box = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Title */}
        <h2 className="text-center  text-2xl md:text-6xl text-gray-600 mb-10">What&apos;s in the box?</h2>
        
        {/* Product Box */}
        <div className="flex flex-col lg:flex-row justify-center items-center lg:space-x-10">
          {/* Left Side (Open Box with Text and Images) */}
          <div className="">
            <img 
              src="/product image.png" 
              alt="Product Box Open"
              className="h-80"
            />
          </div>

          {/* Right Side (Product in the Box) */}
          {/* <div className="lg:w-1/2">
            <img 
              src="/product image.png" 
              alt="Firebee Product"
              className="w-full h-auto"
            />
          </div> */}
        </div>

        {/* Featured On Section */}
        <div className="mt-16 text-center">
          <h3 className="text-lg text-gray-700 mb-4 -mt-12">FEATURED ON</h3>
          <div className="flex flex-wrap justify-center space-x-6">
            <img src="/image.png" alt="GQ" className="h-8 mb-6" />
            <img src="/image222.png" alt="The Guardian" className="h-8 mb-6" />
            <img src="/image5555.png" alt="New York Times" className="h-8 mb-6" />
            <img src="/image55555.png" alt="Mashable" className="h-8 mb-6" />
            <img src="/image555555.png" alt="CNN" className="h-8 mb-6" />
            <img src="/image5555555.png" alt="Wall Street Journal" className="h-8 mb-6" />
          </div>
        </div>

        {/* Box Contents */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
            <div className="flex items-center space-x-2">
            <img src='/Subtract.png' alt="" className='txtixon2 h-8 w-8'/>
              <p className="text-xl text-gray-700 " >1 Firebeeheadband</p>
            </div>
            <div className="flex items-center space-x-2">
            <img src='/Subtract.png' alt="" className='txtixon2 h-8 w-8 -ml-6 md:-ml-0'/>
              <p className="text-xl text-gray-700 " >1 Charging Cable</p>
            </div>
            <div className="flex items-center space-x-2">
            <img src='/Subtract.png' alt="" className='txtixon2 h-8 w-8 -ml-12 md:-ml-0'/>
              <p className="text-xl text-gray-700 " >1 User Manual</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Box;
