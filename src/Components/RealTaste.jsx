import React, { useState } from "react";
import { X } from "lucide-react";
import { motion } from "framer-motion";

export default function RealTaste() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <div
      className={`relative min-h-screen md:h-[80vh] bg-cover bg-center flex items-center justify-center px-4 py-10 transition-all duration-300 ease-in-out ${
        isVideoOpen ? "backdrop-blur-md" : ""
      }`} 
      style={{ backgroundImage: "url('/assets/Breads.png')" }} // ✅ fixed path
    >
      <div className="text-center z-10 max-w-2xl">
        <h1 className="text-white text-4xl sm:text-5xl font-bold mb-4">Real Taste</h1>
        <p className="text-white italic text-lg sm:text-xl mb-6">
          A light, sour wheat dough with roasted walnuts and freshly picked rosemary,
          thyme, poppy seeds, parsley and sage
        </p>
        <button
          onClick={() => setIsVideoOpen(true)}
          className="flex items-center justify-center text-white hover:text-gray-300 focus:outline-none"
        >
          <svg
            className="w-14 h-14 mr-2"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-5.197-3.027A1 1 0 008 9.027v5.946a1 1 0 001.555.832l5.197-3.027a1 1 0 000-1.664z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Watch intro video</span>
        </button>
      </div>

      {isVideoOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
        >
          <div className="relative w-full max-w-6xl mx-auto p-4 h-[80vh]">
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 text-white z-50"
            >
              <X size={32} />
            </button>
            <div className="w-full h-full">
              <iframe
                width="848"
                height="480"
                src="https://www.youtube.com/embed/T-9oN1ukY4c"
                title="Bakery B-roll Cinematic B-roll Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-full h-full rounded-xl shadow-lg"
              ></iframe>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
}
