"use client";
import React from "react";

export function HeroSection() {
  return (
    <div className="min-h-svh w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] overflow-hidden">
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="flex flex-col gap-4 text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          <span className="text-row-1">Transforming Visions into</span>
          <span className="text-row-2">
            <span className="bg-gradient-to-r to-blue-500 via-purple-300 from-blue-200 bg-clip-text text-transparent">
              Stunning 3D
            </span>{" "}
            <span className="bg-gradient-to-r from-white to-neutral-400 bg-clip-text text-transparent">
              Realities
            </span>
          </span>
        </h1>
        <p className="mt-8 font-normal text-sm tracking-widest text-neutral-300/85 max-w-lg text-center mx-auto">
          We specialize in creating immersive 3D designs, animations, and
          visualizations that bring your ideas to life.
        </p>
        {/* <div className="flex text-center items-center my-3 before:flex-1 before:border-b before:border-solid after:flex-1 after:border-b after:border-solid">
          <span className="text-xs border rounded-full px-2 mx-1">OR</span>
        </div> */}
      </div>
    </div>
  );
}
