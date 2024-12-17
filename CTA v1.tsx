"use client";

import React from "react";

const BlockL: React.FC = () => {
  return (
    <div className="pt-20 pb-24 bg-white px-[20px]">
      <div className="grid grid-cols-12 gap-[20px]">
        <div className="col-span-4 col-start-5 flex flex-col w-full justify-center place-items-center">
          <div className="font-heading text-heading text-darkgreen">
            Titel
          </div>
          <div className="mt-10 flex justify-center">
            <button className="font-button bg-green text-darkgreen px-6 h-[40px] rounded-full">
              Knop
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockL;
