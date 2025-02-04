import React, { useState, useEffect } from "react";
import { Link } from "react-router";

const Hero = () => {
  const fullText = "Loop API";
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!isDeleting && letterIndex < fullText.length) {
      // Typing Effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[letterIndex]);
        setLetterIndex(letterIndex + 1);
      }, 300); // Adjust typing speed
    } else if (!isDeleting && letterIndex === fullText.length) {
      // Wait before deleting
      timeout = setTimeout(() => setIsDeleting(true), 1500);
    } else if (isDeleting && letterIndex > 0) {
      // Deleting Effect
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
        setLetterIndex(letterIndex - 1);
      }, 150); // Faster deleting speed
    } else if (isDeleting && letterIndex === 0) {
      // Restart Animation
      setIsDeleting(false);
      setDisplayedText("");
      setLetterIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [letterIndex, isDeleting]);

  return (
    <div className="hero min-h-screen relative">
      <img
        src="https://res.cloudinary.com/do5xzpecm/image/upload/b_black/e_vignette:100/ph7l3upr5us2dj9ojxpb"
        className="absolute inset-0 w-full h-full object-cover brightness-125"
        alt="Background"
      />

      <div className="hero-content text-neutral-content text-center relative z-10 max-w-4xl">
        <div>
          <h1 className="text-6xl md:text-7xl font-extrabold text-base-100 transition-opacity duration-1000">
            The Open-Source API Marketplace{" "}
            <span className="text-primary font-bold">{displayedText}</span>
            <span className="text-white animate-blink">|</span>{" "}
            {/* Blinking Cursor */}
          </h1>
          <p className="mt-6 text-lg md:text-2xl text-gray-300">
            Loop API is an open-source platform where developers can publish,
            discover, and use APIs for free. A collaborative space for API
            creators and consumers, making API integration effortless.
          </p>
          <Link to="/login">
            <button className="btn btn-primary  text-white text-lg mt-5 shadow-lg hover:scale-105 transition-transform">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
