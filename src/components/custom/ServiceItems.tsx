import { BoxIcon, ImageIcon, MonitorPlayIcon } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardContent, CardDescription } from "../ui/card";

const items = [
  {
    title: "3D Models",
    description:
      "Create detailed and lifelike 3D models for games, films, and products",
    icon: <BoxIcon width={22} height={22} />,
  },
  {
    title: "2D Assets",
    description:
      "Showcase drawings designs, pixels, illustration with high quality assets",
    icon: <ImageIcon width={22} height={22} />,
  },
  {
    title: "Animation",
    description:
      "Bring your characters and stories to life with fluid, high-quality animations.",
    icon: <MonitorPlayIcon width={22} height={22} />,
  },
];

export const ServiceItems = () => {
  return (
    <>
      {items.map((item, idx) => (
        <Card className="bg-transparent text-center" key={idx}>
          <CardHeader>
            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-800 p-[5px] px-2 rounded">
                {item.icon}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2">
              <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 text-md tracking-wide font-bold">
                {item.title}
              </span>
              <CardDescription>{item.description}</CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
