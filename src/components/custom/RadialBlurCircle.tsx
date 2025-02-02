import { cn } from "@/lib/utils";
import React from "react";

interface RadialBlurCircle {
  className: string;
}

const RadialBlurCircle = ({ className }: RadialBlurCircle) => {
  return (
    <div
      className={cn(
        "w-[20rem] h-[23rem] rounded-full bg-white absolute ",
        className,
      )}
    ></div>
  );
};

export default RadialBlurCircle;
