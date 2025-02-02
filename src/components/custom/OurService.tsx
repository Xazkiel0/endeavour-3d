import React from "react";
import { ServiceItems } from "./ServiceItems";

const OurService = () => {
  return (
    <div className="mt-20 flex flex-col items-center w-full">
      <div className="w-full">
        <div className="flex text-center items-center my-3 before:flex-1 before:border-b before:border-to-r before:border-gradient-primary after:flex-1 after:border-b after:border-to-l after:border-gradient-primary">
          <span className="text-[.55rem] tracking-widest px-2 mx-1 uppercase text-slate-300/85">
            Our Services
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center max-w-3xl">
        <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center bg-opacity-50 text-transparent">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
            Various
          </span>{" "}
          <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Services
          </span>
        </div>
        <p className="text-center text-sm text-neutral-300/85 tracking-wider">
          Our services are designed to meet the unique needs of your project.
          From 3D modeling and animation to virtual reality experiences, we
          provide end-to-end solutions that captivate and inspire.
        </p>

        <div className="grid grid-cols-3 gap-4 w-full">
          <ServiceItems />
        </div>
      </div>
    </div>
  );
};

export default OurService;
