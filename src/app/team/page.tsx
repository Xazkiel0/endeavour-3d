// import QueryGraphQL from "@/components/custom/QueryGraphQL";
import TeamItems from "@/components/custom/TeamItems";
import React from "react";

const Page = () => {
  const members = [
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user1",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user2",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user3",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user4",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user1",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user2",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user3",
    },
    {
      name: "John Doe",
      division: "3D Division",
      role: "3D Animator",
      link: "/profile/user4",
    },
  ];

  return (
    <div>
      <div className="relative mx-auto w-full h-[400px] rounded">
        <div className="bg-[url('/user-banner-space.png')] bg-cover bg-center w-full h-full absolute -z-20"></div>
        <div className="bg-black/50 w-full h-full absolute -z-10"></div>
        <div className="p-12 h-full z-10">
          <div className="flex flex-row justify-center items-center h-full">
            <h1 className="font-semibold">Our Team Members</h1>
          </div>
        </div>
      </div>
      <div className="">{/* <QueryGraphQL /> */}</div>
      <div className="flex flex-col gap-12 max-w-72 sm:max-w-lg md:max-w-2xl xl:max-w-7xl 2xl:max-w-[1440px] mx-auto mt-20">
        <div className="flex flex-col">
          <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center my-12 bg-opacity-50 text-transparent">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
              3D
            </span>{" "}
            <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Division
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 w-full justify-center">
            <TeamItems members={members} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center my-12 bg-opacity-50 text-transparent">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
              Game Dev
            </span>{" "}
            <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Division
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 w-full justify-center">
            <TeamItems members={members} />
          </div>
        </div>
        <div className="flex flex-col">
          <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center my-12 bg-opacity-50 text-transparent">
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
              Web & Mobile
            </span>{" "}
            <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
              Division
            </span>
          </div>
          <div className="flex flex-row flex-wrap gap-4 w-full justify-center">
            <TeamItems members={members} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
