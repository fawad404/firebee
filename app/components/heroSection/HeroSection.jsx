import React from 'react'
import './heroSection.css';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className='min-h-lvh'>

    <div className="container mx-auto p-4">
        <div className="py-4">
            <div className="w-full flex items-center">
                
                <div className="flex space-x-4 w-[50%] md:ml-24">
                    <img src="/image 166.png" alt="ICNIRP Certified" className="h-14" />
                    <img src="/Group 811.png" alt="FCC Certified" className="h-14" />
                </div>

              
                <div className="flex flex-col w-[50%] ml-5">
                    <h1 className="text-2xl font-bold">Firebee Headband</h1>
                    <div className="flex items-center space-x-2 mt-2">
                        <div className="flex space-x-1">
                            <img src="/Group 782-1.svg" alt="star" className="h-4" />

                        </div>
                        <span className="text-gray-600 text-sm">267 Reviews</span>
                    </div>
                    <p className="text-sm text-gray-600 mt-2">Order today and receive your Firebee by June 15th, 2021</p>
                </div>
            </div>
        </div>

        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         
            <div>
             
                 <div className="main-image-container overflow-hidden">

                     <Image 
                     src="/product with ligh 1.png"
                      alt="Firebee Headband" 
                      className=" main-image w-full object-cover mb-4"
                      width={100}
                      height={100}
                       />
                    </div>

              
                <div className="flex scrollbar-hide images-section space-x-4 overflow-scroll overflow-y-hidden ">
                    <img src="/product with ligh 1.png" alt="Thumbnail 1" className="w-20 h-20 object-cover" />
                    <img src="/DSC08354_Opt2 2.jpg" alt="Thumbnail 2" className="w-20 h-20 object-cover" />
                    <img src="/DSC08354_Opt2 1.jpg" alt="Thumbnail 3" className="w-20 h-20 object-cover" />
                    <img src="/_DP_1563 1.jpg" alt="Thumbnail 4" className="w-20 h-20 object-cover" />
                </div>

                
                <div className="grid grid-cols-2 gap-4 mt-6">

                    <div className="flex items-center space-x-2">
                        <img src="/Union-1.svg" alt="Signal Catalogue Icon" className="w-9 h-9" />
                        <span className="text-sm"></span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/Union-2.svg" alt="Signal Catalogue Icon" className="w-9 h-9" />
                        <span className="text-sm">Free Shipping within USA</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/Union-2.svg" alt="Signal Catalogue Icon" className="w-9 h-9" />
                        <span className="text-sm">Signal Catalogue Updates Included</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <img src="/Vector-6.svg" alt="Support Icon" className="w-9 h-9" />
                        <span className="text-sm">Customer Support via E-mail, Phone, and Chat</span>
                    </div>
                </div>
            </div>

           
            <div>
               
                <div className="kit-section section rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center">
                      
                        <span className="font-bold text-lg">Firebee Starter Kit</span>

                       
                        <div className="flex items-center space-x-2">
                            <span className="text-red-500 line-through text-base">$999.00</span>
                            <span className="text-gray-400 font-thin text-base">$379.00</span>
                        </div>
                    </div>
                    <span
                        className="popular-kit-bg text-white px-6 py-1 rounded-full font-semibold text-sm mt-2 mb-2">Most
                        Popular Kit</span>
                    <ul className="space-y-2 text-sm mt-2">
                        <li className="flex items-center">
                            <img src="/Subtract.png" alt="" className="w-6 h-6" />

                            <p className="ml-2"> Access to 7 signals (and future signal releases) </p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Subtract.png" alt="" className="w-6 h-6" />
                            <p className="ml-2"> Firebee Headband </p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Subtract.png" alt="" className="w-6 h-6" />
                            <p className="ml-2"> $19/month membership, first 2 months free </p>
                        </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">The starter kit is the most affordable...</p>
                </div>

             
                <div className="border section rounded-lg p-4">
                    <div className="flex justify-between items-center">
                     
                        <span className="font-bold text-lg">Firebee Starter Kit</span>

                     
                        <div className="flex items-center space-x-2">
            
                            <span className="text-gray-400 font-thin text-base">$799.00</span>
                        </div>
                    </div>
                    <ul className="space-y-2 text-sm mt-2">
                        <li className="flex items-center">
                            <img src="/Subtract.png" alt="" className="w-6 h-6" />
                            <p className="ml-2"> Access to 7 signals (and future signal releases) </p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Subtract.png" alt="" className="w-6 h-6" />
                            <p className="ml-2"> Firebee Headband </p>
                        </li>
                        <li className="flex items-center">
                            <img src="/Subtract.png" alt="" className="w-6 h-6" />
                            <p className="ml-2">No Monthly Membership</p>
                        </li>
                    </ul>
                    <p className="text-xs text-gray-500 mt-4">The Founder&apos;s Kit allows you to get...</p>
                </div>
                <div className="flex justify-center items-center flex-col">
                    <button className="w-full lg:w-1/2 py-1 bg-[#07C961] rounded-full flex justify-center items-center mt-5">
                        <img src="/Union-3.svg" alt="" className="ml-9 " />
                    </button>
                   
                    <div className="flex space-x-2 mt-4">
                        <img src="/image 157.svg" alt="Visa" className="w-8 h-8" />
                        <img src="/image 158.svg" alt="Mastercard" className="w-8 h-8" />
                        <img src="/image 161.svg" alt="Paypal" className="w-8 h-8" />
                        <img src="/image 160.svg" alt="Mastercard" className="w-8 h-8" />
                        <img src="/image 159.svg" alt="American" className="w-8 h-8"/>
                        <img src="/image 162.svg" alt="Affirm" className="w-8 h-8" />
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default HeroSection
