import { Accordion } from "../ui/accordion";
import React from "react";
import FAQItems from "./FAQItems";

const FAQSection = () => {
  return (
    <div className="relative mt-20 flex flex-col items-center w-full">
      <div className="absolute size-[600px] bg-indigo-300/10 blur-[120px] rounded-full -left-0 -z-10">
        <div className="relative">
          <div className="absolute size-60 bg-indigo-300/20 rounded-full left-0 " />
        </div>
      </div>
      <div className="w-full">
        <div className="flex text-center items-center my-3 before:flex-1 before:border-b before:border-to-r before:border-gradient-primary after:flex-1 after:border-b after:border-to-l after:border-gradient-primary">
          <span className="text-[.55rem] tracking-widest px-2 mx-1 uppercase text-slate-300/85">
            Meet Our Team
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 items-center max-w-72 sm:max-w-lg md:max-w-3xl xl:max-w-7xl">
        <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center bg-opacity-50 text-transparent">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
            FAQ
          </span>
          <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            {"'s"}
          </span>
        </div>
        <div className="flex justify-center w-full">
          <Accordion
            type="single"
            collapsible
            className="flex flex-col gap-3 w-[600px]"
          >
            <FAQItems />
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
