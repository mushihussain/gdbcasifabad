import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const GoogleForm = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 p-6 relative">
      {/* Background Smoke Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_10%,_transparent_80%)]"></div>

      {/* Glass Effect Card */}
      <div className="relative bg-gray-800 bg-opacity-30 backdrop-blur-xl shadow-2xl border border-gray-700 rounded-2xl p-8 text-center max-w-md">
        <h1 className="text-4xl font-extrabold text-white mb-4 tracking-wide drop-shadow-md">
          🚀 Register Now!
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          Secure your spot by filling out the form below. Have a query? Reach us now!
        </p>

        {/* Button with Neon Glow Effect */}
        <a
          href="https://forms.gle/cxdoBf49455ex6Ld8"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          <button className="bg-gray-800 text-white font-semibold px-6 py-3 rounded-full shadow-lg border border-gray-500 hover:border-purple-500 hover:bg-purple-600 hover:scale-105 transform transition-all duration-300 ease-in-out">
            Fill Out Form
          </button>
        </a>

        {/* Contact Info */}
        <div className="mt-6 flex items-center justify-center space-x-3 text-gray-300">
          <FaPhoneAlt className="text-xl text-purple-400 animate-pulse" />
          <span className="text-lg font-medium">+923452067342</span>
        </div>
      </div>
    </div>
  );
};

export default GoogleForm;
