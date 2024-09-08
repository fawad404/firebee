import React from 'react';

const Card = () => {
  // Define an array of objects for each card with image and text values
  const cardData = [
    {
      imgSrc: '/image 15.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/image12112.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/image323232.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/image3232321.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/image32323131121.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/image8989898.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/image83728372.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
    {
      imgSrc: '/Vector-2.png',
      text: 'Discover your best sleep with responsive sleep journeys, overnight sleep tracking, and personalized insights.',
    },
  ];

  return (
    <section className="relative py-12 text-center">
      
      <div
        className="absolute left-5 top-5 lg:top-6 lg:left-5 w-[40%] h-[40%] max-sm:hidden md:w-[25%] md:h-[25%] bg-no-repeat bg-center bg-cover"
        style={{ backgroundImage: "url('/Vector 3 (Stroke).png')", zIndex: -1 }}
      ></div>
      
      <div className="relative max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-6xl text-gray-800 mb-4">Firebee Signals</h1>
        <p className="mt-2 text-gray-600 text-lg md:text-2xl">A signal for every situation</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="bg-gray-50 flex flex-row rounded-lg shadow-lg p-6 items-center lg:w-full md:w-full w-[75%] transition-transform transform hover:scale-105"
            >
              <img src={card.imgSrc} alt={`Card ${index + 1}`} className="w-16 mb-4 mt-4" />
              <div className="w-full ml-5">
                <p className="text-sm text-gray-600 text-left">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div
        className="absolute right-5 bottom-5 lg:bottom-6 lg:right-5 w-[20%] h-[20%] sm:w-[30%] sm:h-[30%] md:w-[25%] md:h-[25%] bg-no-repeat bg-cover max-sm:hidden"
        style={{ backgroundImage: "url('/Vector 3 (Stroke)-1.png')", zIndex: -1 }}
      ></div>
    </section>
  );
};

export default Card;
