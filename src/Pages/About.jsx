import React from "react";
import NewsLetter from "../Components/NewsLetter.jsx";

const About = () => {
  return (
    <div className="bg-[#121212] text-[#E0E0E0]">
      {/* Section Title */}
      <div className="text-center text-4xl font-extrabold text-white pt-12 border-t border-gray-700 uppercase tracking-wide">
        About Us
      </div>

      {/* About Content */}
      <div className="max-w-7xl mx-auto py-16 px-6 sm:px-12 flex flex-col md:flex-row gap-12 items-center">
        
        {/* Left Section: About Text */}
        <div className="w-full md:w-2/3 leading-relaxed space-y-6 animate-fade-in">
          <h2 className="text-5xl font-extrabold text-white text-center md:text-left">
            Welcome to <span className="text-[#FF6F61]">BuY IT</span>
          </h2>
          <p className="text-lg text-gray-300">
            <strong>BuY IT</strong> is your ultimate online shopping destination, offering a curated selection of top-quality products at unbeatable prices. Whether you're looking for the latest fashion, cutting-edge electronics, or everyday essentials, we've got you covered.
          </p>
          <p className="text-lg text-gray-300">
            Our platform is designed to make online shopping <strong>faster, easier, and more enjoyable</strong>. We are committed to providing a seamless experience with a <strong className="text-[#FF6F61]">user-friendly interface</strong>, <strong className="text-[#FF6F61]">secure payments</strong>, and <strong className="text-[#FF6F61]">lightning-fast deliveries</strong>.
          </p>

          {/* Why Choose Us? */}
          <div className="mt-8">
            <h3 className="text-3xl font-bold text-white">Why Choose <span className="text-[#FF6F61]">BuY IT?</span></h3>
            <ul className="list-none mt-5 space-y-4">
              <li className="flex items-center space-x-3 text-lg text-gray-300">
                ✅ <strong className="text-white">Premium Selection</strong> – High-quality products, carefully curated for the best value.
              </li>
              <li className="flex items-center space-x-3 text-lg text-gray-300">
                ✅ <strong className="text-white">Seamless Shopping</strong> – A smooth, hassle-free online shopping experience.
              </li>
              <li className="flex items-center space-x-3 text-lg text-gray-300">
                ✅ <strong className="text-white">Fast & Secure Checkout</strong> – Multiple payment options with <strong className="text-[#FF6F61]">top-tier security</strong>.
              </li>
              <li className="flex items-center space-x-3 text-lg text-gray-300">
                ✅ <strong className="text-white">Lightning-Fast Delivery</strong> – Get your orders quickly with our <strong className="text-[#FF6F61]">trusted delivery partners</strong>.
              </li>
              <li className="flex items-center space-x-3 text-lg text-gray-300">
                ✅ <strong className="text-white">24/7 Customer Support</strong> – A dedicated team ready to assist you anytime.
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section: Image */}
        <div className="w-full md:w-1/3 flex justify-center animate-zoom-in">
          <img
            src="/assets/about-banner.png" 
            alt="Illustration of online shopping at BuY IT"
            className="w-[90%] max-w-md rounded-lg shadow-2xl transition-transform duration-500 hover:scale-105"
          />
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-[#FF6F61] text-white py-12">
        <NewsLetter />
      </div>
    </div>
  );
};

export default About;
