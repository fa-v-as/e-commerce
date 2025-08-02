import React from "react";

const Hero = () => {
  const scrollToCollections = (e) => {
    e.preventDefault();
    document.querySelector("#collections").scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative bg-[#0e0e0e] text-white min-h-screen flex items-center justify-center px-6 sm:px-12 py-20 overflow-hidden font-['Roboto']">
      {/* Elegant Gradient Background Layer */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#00bfa6]/30 via-transparent to-[#9D4EDD]/20 blur-md"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-6xl text-center space-y-10">
        {/* Heading */}
        <h1 className="text-4xl sm:text-6xl font-extrabold font-['Playfair Display'] text-[#FFA41B] leading-tight tracking-wide drop-shadow-md">
          Elevate Your Style. Embrace the Deals.
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
          Explore a world of curated fashion, tech, and lifestyle — all in one place. Shop confidently with fast delivery and secure checkout.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-6 pt-4">
          <a
            href="#shop"
            className="bg-[#00bfa6] hover:bg-[#00a792] text-white text-base sm:text-lg font-semibold px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 tracking-wide"
          >
            🛒 Start Shopping
          </a>

          <button
            onClick={scrollToCollections}
            className="text-[#4169E1] border-2 border-[#4169E1] hover:bg-[#1a1a1a] hover:border-[#5f7fff] hover:text-[#5f7fff] px-10 py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-md transition duration-300 tracking-wide"
          >
            View Collections
          </button>
        </div>

        {/* Floating Badge */}
        <div className="mt-10 inline-block bg-[#1f1f1f] border border-[#9D4EDD] text-[#9D4EDD] font-semibold text-base sm:text-lg px-6 py-3 rounded-full shadow-md backdrop-blur-sm tracking-wider uppercase">
          Your Ultimate Shopping Destination
        </div>
      </div>
    </section>
  );
};

export default Hero;
