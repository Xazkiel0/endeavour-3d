import React from "react";
import { ServiceItems } from "./ServiceItems";

const OurService = () => {
  return (
    <div className="relative mt-20 flex flex-col items-center justify-center w-full min-h-svh">
      <div className="w-full">
        <div className="flex text-center items-center my-3 before:flex-1 before:border-b before:border-to-r before:border-gradient-primary after:flex-1 after:border-b after:border-to-l after:border-gradient-primary">
          <span className="text-[.55rem] tracking-widest px-2 mx-1 uppercase text-slate-300/85">
            Our Services
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center max-w-72 sm:max-w-lg md:max-w-2xl xl:max-w-7xl">
        <h1 className="h-fit gap-4 font-bold text-center bg-opacity-50 text-transparent">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
            Various
          </span>{" "}
          <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Services
          </span>
        </h1>
        <p className="text-center text-neutral-300/85 tracking-wider">
          Our services are designed to meet the unique needs of your project.
          From 3D modeling and animation to virtual reality experiences, we
          provide end-to-end solutions that captivate and inspire.
        </p>

        <div className="flex flex-row flex-wrap justify-center gap-4 w-full">
          <ServiceItems />
        </div>
      </div>
    </div>
  );
};

export default OurService;
