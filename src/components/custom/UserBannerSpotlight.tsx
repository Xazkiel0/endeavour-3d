"use client";
import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
// import { IconAppWindow } from "@tabler/icons-react";

interface Props {
  imageSpotlight?: string;
}

export function UserBannerSpotlight({ imageSpotlight }: Props) {
  return (
    <div>
      <BackgroundGradient
        className={`rounded-[22px] p-4 sm:p-10 ${
          imageSpotlight ? "bg-[url('/" + imageSpotlight + "')]" : "bg-zinc-900"
        } w-full h-[300px]`}
      ></BackgroundGradient>
    </div>
  );
}
