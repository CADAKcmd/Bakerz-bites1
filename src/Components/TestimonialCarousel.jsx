import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Sophie Bennett",
    image: "https://randomuser.me/api/portraits/women/12.jpg",
    quote:
      "The chocolate croissants are absolutely divine! I grab one every morning before work—fresh, flaky, and perfect every time."
  },
  {
    name: "Daniel Reed",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
    quote:
      "This is hands down the best sourdough in town. Crunchy on the outside, soft on the inside. Always baked to perfection!"
  },
  {
    name: "Laura Kim",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote:
      "I ordered a custom birthday cake for my daughter and it was not only stunning but also incredibly moist and flavorful."
  },
  {
    name: "Ethan Cole",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
    quote:
      "Every time I visit, I end up leaving with a bag full of cookies. They’re simply irresistible!"
  },
  {
    name: "Chloe Watson",
    image: "https://randomuser.me/api/portraits/women/30.jpg",
    quote:
      "The staff is so friendly and the smell of fresh bread hits you the moment you walk in. A true bakery haven!"
  }
];

const TestimonialCarousel = () => {
  const [startIndex, setStartIndex] = useState(0);

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? testimonials.length - 4 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % (testimonials.length - 3));
  };

  const visibleTestimonials = testimonials.slice(startIndex, startIndex + 4);

  return (
    <div className="bg-yellow-400 p-6 sm:p-12 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">What Our Customers Say</h2>
        <div className="flex justify-center items-center space-x-4 mb-8">
          <button
            onClick={handlePrev}
            className="rounded-full border border-white p-2 hover:bg-white hover:text-black"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="rounded-full border border-white p-2 hover:bg-white hover:text-black"
          >
            <FaChevronRight />
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white text-black shadow-xl rounded-2xl p-6">
              <div className="flex justify-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full border-2 border-yellow-400"
                />
              </div>
              <div className="text-yellow-400 text-2xl mb-2">
                <FaQuoteLeft />
              </div>
              <p className="italic text-sm mb-4">{testimonial.quote}</p>
              <p className="font-semibold text-right">- {testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
