"use client";
import { BoxIcon, EyeIcon, Heart, StarIcon } from "lucide-react";
import React, { useState } from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const ProjectCard = () => {
  const [isLike, setIsLike] = useState(false);

  return (
    <Card className="bg-transparent overflow-hidden relative min-h-[250px] group/card rounded-none border-transparent">
      <div
        className={`p-2 absolute top-2 right-2 cursor-pointer z-20 group-hover/card:block hidden`}
        onClick={() => setIsLike(!isLike)}
      >
        <Heart
          fill={`${isLike && "red"}`}
          color={`${isLike ? "red" : "white"}`}
        />
      </div>
      <div className="bg-gradient-to-t from-black to-80% to-transparent w-full h-full absolute z-10 group-hover/card:block hidden">
        <div className="p-4 absolute bottom-0 w-full">
          <div className="flex flex-row justify-between">
            <div className="flex flex-col gap-2">
              <h5 className="font-semibold">Project Name</h5>
              <h6 className="text-xs font-bold text-white/70">
                <span className="flex flex-row gap-1">
                  <BoxIcon width={16} height={16} />
                  3D
                </span>
              </h6>
            </div>
            <div className="flex flex-col gap-2">
              <h6 className="text-xs font-bold text-white/70">
                <span className="flex flex-row gap-1 justify-end">
                  97
                  <StarIcon width={16} height={16} />
                </span>
              </h6>
              <h6 className="text-xs font-bold text-white/70">
                <span className="flex flex-row gap-1 justify-end">
                  301
                  <EyeIcon width={16} height={16} />
                </span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <Image
        className="h-full absolute -z-10"
        src="/3D.jpeg"
        alt=""
        width={1000}
        height={500}
      />
    </Card>
  );
};

export default ProjectCard;
