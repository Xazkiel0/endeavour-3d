import ProjectCard from "@/components/custom/ProjectCard";
import { UserBannerSpotlight } from "@/components/custom/UserBannerSpotlight";
import { MapPinIcon, ZapIcon } from "lucide-react";
import Image from "next/image";
import React from "react";

interface Props {
  params: Promise<{ id: string }>;
}

const page = async ({ params }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const id = (await params).id;

  return (
    <div className="wrapper">
      <div className="relative mx-auto w-full h-[400px] rounded">
        <div className="bg-[url('/user-banner-space.png')] bg-cover bg-center w-full h-full absolute -z-20"></div>
        <div className="bg-gradient-to-t from-background to-transparent w-full h-full absolute -z-10"></div>
        <div className="p-12 h-full z-10">
          <div className="flex flex-row h-full">
            <div className="hidden md:flex flex-col justify-end">
              <div className="flex flex-row gap-6">
                <Image
                  className="rounded-full size-36"
                  src={"/user-profile-cat.png"}
                  alt=""
                  width={500}
                  height={500}
                />
                <div className="flex flex-col py-2 justify-center gap-2">
                  <div className="flex flex-row items-center gap-2">
                    <h1 className="text-5xl font-bold">Alifio Farras</h1>
                    <span className="bg-green-500 font-semibold text-sm px-1 rounded-[2px]">
                      Junior
                    </span>
                  </div>
                  <div className="flex flex-row ">
                    <h2>
                      <span>10+ Projects</span>
                    </h2>
                    <h2 className="before:content-['|'] before:px-3">
                      <span>7+ Years Experience</span>
                    </h2>
                    <div className="flex flex-row items-center before:content-['|'] before:px-3">
                      <MapPinIcon width={18} height={18} />
                      <h2 className="ml-1">
                        <span>Yogyakarta</span>
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative max-w-7xl xl:max-w-screen-2xl mx-auto w-full">
        <div className="absolute md:static w-full flex flex-col -top-20 px-12">
          <div className="flex flex-col md:hidden justify-end w-full">
            <div className="flex flex-col gap-6">
              <Image
                className="rounded-full size-36"
                src={"/user-profile-cat.png"}
                alt=""
                width={500}
                height={500}
              />
              <div className="flex flex-col py-2 justify-center gap-2">
                <h1 className="text-4xl font-bold flex flex-row flex-wrap items-center gap-2 mb-2">
                  Alifio Farras{" "}
                  <span className="bg-green-500 font-semibold text-sm px-1 rounded-[2px]">
                    Junior
                  </span>
                </h1>
                <div className="flex flex-col gap-2 md:gap-2">
                  <h2>
                    <span>10+ Projects</span>
                  </h2>
                  <h2 className="">
                    <span>7+ Years Experience</span>
                  </h2>
                  <div className="flex flex-row items-center ">
                    <MapPinIcon width={18} height={18} />
                    <h2 className="ml-1">
                      <span>Yogyakarta</span>
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <nav className="flex flex-col gap-16 mt-8">
            <UserBannerSpotlight />
            <div className="flex flex-col gap-8">
              <div className="flex flex-row items-center gap-1">
                <ZapIcon width={16} height={16} />
                <div className="text-xl font-semibold">My Projects</div>
              </div>
              <div className="columns-3 gap-2 space-y-2">
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard />
              </div>
            </div>
          </nav>
          <div className="h-screen"></div>
        </div>
      </div>
    </div>
  );
};

export default page;
