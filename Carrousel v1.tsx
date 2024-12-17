"use client";

import React from "react";

const BlockI: React.FC = () => {
  return (
    <div className="pt-24 pb-12 bg-darkgreen px-[20px] md:px-[120px]">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-12">
        <div className="col-start-3 col-span-8 flex justify-center items-center relative">
          {/* Left Card */}
          <div className="w-[450px] h-[450px] bg-lime p-16 rounded-2xl text-center shadow-lg absolute left-0 -translate-x-10 opacity-70">
            <h2 className="font-heading text-heading text-darkgreen">Titel 1</h2>
            <p className="font-body text-body text-darkgreen mt-4">
              Statische tekst voor kaart 1.
            </p>
            <button className="mt-6 px-4 py-2 bg-green text-darkgreen font-button rounded-full">
              Knop 1
            </button>
          </div>

          {/* Center Card */}
          <div className="w-[450px] h-[550px] bg-lime p-16 rounded-2xl text-center shadow-lg z-10">
            <h2 className="font-heading text-heading text-darkgreen">Titel 2</h2>
            <p className="font-body text-body text-darkgreen mt-4">
              Statische tekst voor kaart 2.
            </p>
            <button className="mt-6 px-4 py-2 bg-green text-darkgreen font-button rounded-full">
              Knop 2
            </button>
          </div>

          {/* Right Card */}
          <div className="w-[450px] h-[450px] bg-lime p-16 rounded-2xl text-center shadow-lg absolute right-0 translate-x-10 opacity-70">
            <h2 className="font-heading text-heading text-darkgreen">Titel 3</h2>
            <p className="font-body text-body text-darkgreen mt-4">
              Statische tekst voor kaart 3.
            </p>
            <button className="mt-6 px-4 py-2 bg-green text-darkgreen font-button rounded-full">
              Knop 3
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockI;
