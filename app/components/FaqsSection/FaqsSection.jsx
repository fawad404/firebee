import React from "react";

const FaqsSection = () => {
  return (
    <section className="py-12 py-lg-24 position-relative overflow-hidden px-8 px-sm-12 px-md-20 py-20 px-8">
      <img
        className="position-absolute top-0 end-0 mt-20"
        src="saturn-assets/images/faq/star-right.svg"
        alt=""
      />
      <img
        className="position-absolute top-0 start-0"
        src="saturn-assets/images/faq/light-blue-left.png"
        alt=""
      />
      <div className="container position-relative">
        <div className="mw-4xl mx-auto text-center mb-16">
          <span className="badge px-4 py-2 text-primary bg-primary-light mb-5">
            FREQUENTLY ASK QUESTION
          </span>
          <h2 className="font-heading mb-16">
            <span>You ask? We</span>
            <span style={{ fontFamily: "'Playfair Display', 'ui-serif', 'Georgia', 'Cambria', 'Times New Roman'" }}>
              answer
            </span>
          </h2>
          <div className="px-8 px-sm-12 px-md-20 py-20 bg-white rounded-5 shadow-lg">
            {faqData.map((faq, index) => (
              <button
                key={index}
                className="btn p-0 mb-8 btn-link w-100 text-start text-decoration-none"
              >
                <div className="d-flex pb-8 gap-4 align-items-start justify-content-between border-bottom">
                  <div className="mw-xl">
                    <h6 className="fs-6 fw-semibold text-primary mb-3">{faq.question}</h6>
                    {faq.answer && (
                      <p className="fs-7 text-secondary mb-0">{faq.answer}</p>
                    )}
                  </div>
                  <span className="flex-shrink-0">
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={faq.iconPath}
                        fill={faq.iconColor}
                      />
                    </svg>
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const faqData = [
  {
    question: "Do you provide a complete design style?",
    answer: "Pretium ac auctor quis urna orci feugiat. Vulputate tellus velit tellus orci auctor vel nulla facilisi ut. Ante nunc risus viverra vivamus. Eros amet at lectus ac ac nibh dignissim.",
    iconPath: "M19.4619 11.0452H5.46194C5.19673 11.0452 4.94237 11.1505 4.75484 11.3381C4.5673 11.5256 4.46194 11.7799 4.46194 12.0452C4.46194 12.3104 4.5673 12.5647 4.75484 12.7523C4.94237 12.9398 5.19673 13.0452 5.46194 13.0452H19.4619C19.7272 13.0452 19.9815 12.9398 20.1691 12.7523C20.3566 12.5647 20.4619 12.3104 20.4619 12.0452C20.4619 11.7799 20.3566 11.5256 20.1691 11.3381C19.9815 11.1505 19.7272 11.0452 19.4619 11.0452Z",
    iconColor: "#FF460C",
  },
  {
    question: "How to apply saturn to our project?",
    iconPath: "M19.4619 11H13.4619V5C13.4619 4.73478 13.3566 4.48043 13.1691 4.29289C12.9815 4.10536 12.7272 4 12.4619 4C12.1967 4 11.9424 4.10536 11.7548 4.29289C11.5673 4.48043 11.4619 4.73478 11.4619 5V11H5.46194C5.19673 11 4.94237 11.1054 4.75484 11.2929C4.5673 11.4804 4.46194 11.7348 4.46194 12C4.46194 12.2652 4.5673 12.5196 4.75484 12.7071C4.94237 12.8946 5.19673 13 5.46194 13H11.4619V19C11.4619 19.2652 11.5673 19.5196 11.7548 19.7071C11.9424 19.8946 12.1967 20 12.4619 20C12.7272 20 12.9815 19.8946 13.1691 19.7071C13.3566 19.5196 13.4619 19.2652 13.4619 19V13H19.4619C19.7272 13 19.9815 12.8946 20.1691 12.7071C20.3566 12.5196 20.4619 12.2652 20.4619 12C20.4619 11.7348 20.3566 11.4804 20.1691 11.2929C19.9815 11.1054 19.7272 11 19.4619 11Z",
    iconColor: "black",
  },
  {
    question: "How was the license?",
    iconPath: "M19.4619 11H13.4619V5C13.4619 4.73478 13.3566 4.48043 13.1691 4.29289C12.9815 4.10536 12.7272 4 12.4619 4C12.1967 4 11.9424 4.10536 11.7548 4.29289C11.5673 4.48043 11.4619 4.73478 11.4619 5V11H5.46194C5.19673 11 4.94237 11.1054 4.75484 11.2929C4.5673 11.4804 4.46194 11.7348 4.46194 12C4.46194 12.2652 4.5673 12.5196 4.75484 12.7071C4.94237 12.8946 5.19673 13 5.46194 13H11.4619V19C11.4619 19.2652 11.5673 19.5196 11.7548 19.7071C11.9424 19.8946 12.1967 20 12.4619 20C12.7272 20 12.9815 19.8946 13.1691 19.7071C13.3566 19.5196 13.4619 19.2652 13.4619 19V13H19.4619C19.7272 13 19.9815 12.8946 20.1691 12.7071C20.3566 12.5196 20.4619 12.2652 20.4619 12C20.4619 11.7348 20.3566 11.4804 20.1691 11.2929C19.9815 11.1054 19.7272 11 19.4619 11Z",
    iconColor: "black",
  },
  {
    question: "How much we can buy this marvelous product?",
    iconPath: "M19.4619 11H13.4619V5C13.4619 4.73478 13.3566 4.48043 13.1691 4.29289C12.9815 4.10536 12.7272 4 12.4619 4C12.1967 4 11.9424 4.10536 11.7548 4.29289C11.5673 4.48043 11.4619 4.73478 11.4619 5V11H5.46194C5.19673 11 4.94237 11.1054 4.75484 11.2929C4.5673 11.4804 4.46194 11.7348 4.46194 12C4.46194 12.2652 4.5673 12.5196 4.75484 12.7071C4.94237 12.8946 5.19673 13 5.46194 13H11.4619V19C11.4619 19.2652 11.5673 19.5196 11.7548 19.7071C11.9424 19.8946 12.1967 20 12.4619 20C12.7272 20 12.9815 19.8946 13.1691 19.7071C13.3566 19.5196 13.4619 19.2652 13.4619 19V13H19.4619C19.7272 13 19.9815 12.8946 20.1691 12.7071C20.3566 12.5196 20.4619 12.2652 20.4619 12C20.4619 11.7348 20.3566 11.4804 20.1691 11.2929C19.9815 11.1054 19.7272 11 19.4619 11Z",
    iconColor: "black",
  },
];

export default FaqsSection;
