"use client";

import React, { useState } from "react";

const BlockI: React.FC = () => {
  const [activeCard, setActiveCard] = useState(1);

  const handleScroll = () => {
    setActiveCard((prev) => (prev < 3 ? prev + 1 : 1));
  };

  return (
    <div className="pt-24 pb-12 bg-darkgreen px-[20px] md:px-[120px] overflow-hidden">
      <div
        className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12"
        onClick={handleScroll}
      >
        <div className="col-start-3 col-span-8 flex justify-center items-center relative">
          {/* Left Card */}
          <div
            className={`w-[450px] h-[450px] bg-lime p-16 rounded-2xl text-center shadow-lg absolute left-0 -translate-x-10 ${
              activeCard === 1 ? "opacity-100" : "opacity-50"
            }`}
          >
            <h2 className="font-heading text-heading text-darkgreen">Titel 1</h2>
            <p className="font-body text-body text-darkgreen mt-4">
              Tekst voor kaart 1.
            </p>
          </div>

          {/* Center Card */}
          <div
            className={`w-[450px] h-[550px] bg-lime p-16 rounded-2xl text-center shadow-lg z-10 ${
              activeCard === 2 ? "opacity-100" : "opacity-50"
            }`}
          >
            <h2 className="font-heading text-heading text-darkgreen">Titel 2</h2>
            <p className="font-body text-body text-darkgreen mt-4">
              Tekst voor kaart 2.
            </p>
          </div>

          {/* Right Card */}
          <div
            className={`w-[450px] h-[450px] bg-lime p-16 rounded-2xl text-center shadow-lg absolute right-0 translate-x-10 ${
              activeCard === 3 ? "opacity-100" : "opacity-50"
            }`}
          >
            <h2 className="font-heading text-heading text-darkgreen">Titel 3</h2>
            <p className="font-body text-body text-darkgreen mt-4">
              Tekst voor kaart 3.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockI;
