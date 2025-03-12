"use client";
import React from "react";
import GradientText from "../reactbits/GradientText/GradientText";
import { Button } from "../ui/button";

export function HeroSection() {
  return (
    <div className="min-h-svh w-full rounded-md flex md:items-center md:justify-center antialiased bg-grid-white/[0.02] overflow-hidden justify-center items-center">
      <div className="-mt-20 p-4 max-w-2xl md:max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="flex flex-col gap-4 text-4xl lg:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
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
        <p className="mt-8 font-normal text-xl tracking-wide text-neutral-300/85 max-w-2xl text-center mx-auto">
          We specialize in creating immersive 3D designs, animations, and
          visualizations that bring your ideas to life.
        </p>
        <div className="mt-8 flex flex-row flex-wrap gap-4 items-stretch justify-center">
          <GradientText
            colors={["#3b82f6", "#d8b4fe", "#bfdbfe", "#3b82f6", "#d8b4fe"]}
            animationSpeed={3}
            showBorder={true}
            className="p-4 px-12 rounded-sm font-semibold"
          >
            <div className="flex">
              <h3 className="text-nowrap">Get Started</h3>
            </div>
          </GradientText>
          <div className="flex rounded-sm font-semibold">
            <Button variant="default" className="p-4 px-12 h-full">
              <h3 className="text-nowrap">Learn More</h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
