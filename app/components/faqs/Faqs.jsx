'use client'
import React, { useState } from 'react';

const Faqs = () => {
  const [openFAQ, setOpenFAQ] = useState(null); // Tracks the open FAQ

  // Array containing FAQ items
  const faqData = [
    {
      question: 'Is Firebee Safe?',
      answer:
        'Yes, Firebee is safe. Firebee meets the safety standards set by ICNIRP (International Commission on Non-Ionizing Radiation Protection). Firebee is 3000x less powerful than your average smartphone...',
    },
    {
      question: 'How Does Firebee Work?',
      answer: 'Firebee works by...',
    },
    {
      question: 'Will Firebee Fit on My Head?',
      answer: 'Firebee works by...',
    },
    {
      question: 'What if I signal to stop?',
      answer: 'Firebee works by...',
    },
    {
      question: 'How do you charge Firebee?',
      answer: 'Firebee works by...',
    },
  ];

  // Function to toggle open/close FAQ
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index); // Open if closed, close if open
  };

  return (
    <div className="max-w-2xl mx-auto py-8 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl sm:text-2xl font-semibold text-center mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border-b">
            <button
              className="flex items-center justify-between w-full py-4 text-left"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg sm:text-base font-semibold">{faq.question}</span>
              <span>
                {openFAQ === index ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                )}
              </span>
            </button>
            <div
              className={`${
                openFAQ === index ? 'block' : 'hidden'
              } pb-4 transition-all duration-300 ease-in-out`}
            >
              <p className="text-gray-600 text-sm sm:text-xs">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
