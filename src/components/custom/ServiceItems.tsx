import { BoxIcon, ImageIcon, MonitorPlayIcon } from "lucide-react";
import React from "react";
import { Card, CardHeader, CardContent, CardDescription } from "../ui/card";

const items = [
  {
    title: "3D Models",
    description:
      "Create detailed and lifelike 3D models for games, films, and products",
    icon: <BoxIcon width={32} height={32} />,
  },
  {
    title: "2D Assets",
    description:
      "Showcase drawings designs, pixels, illustration with high quality assets",
    icon: <ImageIcon width={32} height={32} />,
  },
  {
    title: "Animation",
    description:
      "Bring your characters and stories to life with fluid, high-quality animations.",
    icon: <MonitorPlayIcon width={32} height={32} />,
  },
];

export const ServiceItems = () => {
  return (
    <>
      {items.map((item, idx) => (
        <Card className="bg-transparent text-center w-72" key={idx}>
          <CardHeader>
            <div className="flex justify-center items-center">
              <div className="bg-gradient-to-br from-background to-80% to-indigo-500/80 p-[5px] px-2 rounded">
                {item.icon}
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-2 mt-3">
              <h3 className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-wide font-bold">
                {item.title}
              </h3>
              <CardDescription className="tracking-wide">
                <p>{item.description}</p>
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  );
};
