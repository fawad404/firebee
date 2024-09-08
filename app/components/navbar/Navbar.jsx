'use client'
import React, { useState } from 'react';


export default function Navbar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const categories = [
    { id: 1, category: 'fashion' },
    { id: 2, category: 'tech' },
  ];

  const signOut = () => {
    console.log("User signed out");
  };

  return (
    <>
      <section>
        <nav className="relative py-6 bg-transparent mb-5 md:mb-8 z-50">
          <div className="container px-4 mx-auto">
            <div className="flex items-center">
              <a className="inline-block text-lg font-bold" href="/">
                <img className="h-10" src="./Frame 3.svg" alt="" width="auto" />
              </a>
              <div className="lg:hidden ml-auto">
                <button
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                  className="flex w-12 h-12 items-center justify-center bg-gray-100 hover:bg-gray-200 rounded-md transition duration-200"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 12H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M3 6H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    <path d="M3 18H21" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                  </svg>
                </button>
              </div>
              <ul className="hidden lg:flex ml-14 lg:w-auto lg:space-x-12">
                <li className="group relative">
                  <a className="inline-block text-slate text-gray-500 hover:text-orange-900 font-medium" href="/blog/fashion">How it works</a>
                  <div className="hidden group-hover:block absolute top-full left-0 min-w-max max-w-xs p-4 z-50">
                    <div className="-mb-2 ml-8 w-4 h-4 rounded-sm bg-white border-l border-t border-gray-200 transform rotate-45"></div>
                    <div className="w-full max-w-xs bg-white border border-gray-100 rounded-3xl pt-4 pb-4 px-4">
                      <div className="pb-3 mb-3 border-b border-gray-100">
                        {categories.map((cat) => (
                          <a className="block py-3 px-4 text-slate text-gray-500 hover:bg-orange-50 rounded-lg" href={`/blog/${cat.category}`} key={cat.id}>{cat.category}</a>
                        ))}    
                      </div>
                    </div>
                  </div>
                </li>
                <li><a className="inline-block text-slate text-gray-500 hover:text-orange-900 font-medium" href="/blog">Signals</a></li>
                <li><a className="inline-block text-slate text-gray-500 hover:text-orange-900 font-medium" href="/contact">Reviews</a></li>
                <li><a className="inline-block text-slate text-gray-500 hover:text-orange-900 font-medium" href="/contact">Blogs</a></li>
              </ul>
              <div className="hidden lg:block ml-auto">
                <div className="flex items-center">
                  <a className="relative group mr-12 inline-block py-4 px-6 text-slate font-semibold text-white hover:text-green-600 bg-green-500 border border-gray-200 rounded-3xl overflow-hidden transition duration-300" href="/login">
                    <div className="absolute top-0 right-full w-full h-full bg-white transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">Buy Now</span>
                  </a>
                  <a className="relative group inline-block py-3 px-3 text-slate font-semibold text-orange-900 hover:text-white bg-blue-500 rounded-full overflow-hidden transition duration-300" href="#" onClick={signOut}>
                    <div className="absolute top-0 right-full w-full h-full bg-green-500 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                    <span className="relative">
                    <img src="./Vector.png" alt="" />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className={`fixed top-0 left-0 bottom-0 w-5/6 max-w-md z-50 ${mobileNavOpen ? 'block' : 'hidden'}`}>
          <div onClick={() => setMobileNavOpen(!mobileNavOpen)} className="fixed inset-0 bg-gray-800 opacity-25"></div>
          <nav className="relative flex flex-col py-6 px-10 w-full h-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-16">
              <a className="mr-auto text-2xl font-medium leading-none" href="/">
                <img className="h-10" src="./Frame 3.svg" alt="" width="auto" />
              </a>
              <button style={{background: 'transparent', marginRight: '-105px'}} onClick={() => setMobileNavOpen(!mobileNavOpen)}>
                <svg className="h-6 w-6 text-gray-500 cursor-pointer hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            <ul className="mb-2">
              <li><a className="block py-4 px-5 text-gray-500 hover:bg-orange-50 rounded-lg" href="/blog">How it works</a></li>
              <li><a className="block py-4 px-5 text-gray-500 hover:bg-orange-50 rounded-lg" href="/fashion">Signals</a></li>
              <li><a className="block py-4 px-5 text-gray-500 hover:bg-orange-50 rounded-lg" href="/contact">Reviews</a></li>
              <li><a className="block py-4 px-5 text-gray-500 hover:bg-orange-50 rounded-lg" href="/contact">Blogs</a></li>
            </ul>
            <div className="py-6 px-5 ps-0">
              <a className="block w-full py-4 px-6 mb-3 text-slate font-semibold bg-green-600 text-white hover:text-green-600 border border-green-600 hover:bg-white rounded-md transition duration-200" 
              href="/login">Buy Now</a>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
}
