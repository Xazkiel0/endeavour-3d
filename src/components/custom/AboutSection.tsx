import React from "react";
import RadialBlurCircle from "./RadialBlurCircle";

const AboutSection = () => {
  return (
    <div className="w-full h-screen mt-8 flex flex-col items-center gap-2">
      {/* <div className="perspective w-full"> */}
      <RadialBlurCircle className="bg-gradient-to-bl from-blue-500 to-50% blur-[80px] radial-blur-about -left-32 xl:-left-80 -z-50 opacity-50 " />
      {/* </div> */}
      <div className="w-full">
        <div className="flex text-center items-center my-3 before:flex-1 before:border-b before:border-to-r before:border-gradient-primary after:flex-1 after:border-b after:border-to-l after:border-gradient-primary">
          <span className="text-[.55rem] tracking-widest px-2 mx-1 uppercase text-slate-300/85">
            Who We Are
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center max-w-3xl">
        <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center bg-opacity-50 text-transparent">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
            Elegant
          </span>{" "}
          <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Story
          </span>
        </div>
        <p className="text-center text-sm text-neutral-300/85 tracking-wider">
          At Endeavour3D, we’re passionate about pushing the boundaries of 3D
          design. Founded in 2025, our team of 3D artists and animators is
          dedicated to delivering exceptional results for clients worldwide.
          From concept to completion, we’re here to make your vision a reality.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;
