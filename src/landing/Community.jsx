import React from "react";
import { testimonials } from "../constants/Data/community";

const TestimonialsSection = () => {
  return (
    <div
      className="my-10 px-12 py-24 min-h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/do5xzpecm/image/upload/v1738651995/blob-scene-haikei_3_nt8mow.svg')",
      }}
    >
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        ⭐ What Our Community Says
      </h1>
      <div className="max-w-screen-lg mx-auto flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center max-w-md text-center transform hover:scale-105 transition-all duration-300"
            key={index}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-16 h-16 rounded-full mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">
              {testimonial.name}
            </h3>
            <p className="text-sm text-gray-500">{testimonial.role}</p>

            <p className="text-gray-700 mt-2">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialsSection;
