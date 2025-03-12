import React from "react";
import TeamItems from "./TeamItems";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

const TeamSection = () => {
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
  ];

  return (
    <div className="relative flex flex-col items-center mt-20 w-full min-h-svh">
      <div className="absolute size-[600px] bg-indigo-300/5 blur-[120px] rounded-full -right-0 -z-10">
        <div className="relative">
          <div className="absolute size-60 bg-indigo-300/10 rounded-full right-0 " />
        </div>
      </div>
      <div className="w-full">
        <div className="flex text-center items-center my-3 before:flex-1 before:border-b before:border-to-r before:border-gradient-primary after:flex-1 after:border-b after:border-to-l after:border-gradient-primary">
          <span className="text-[.55rem] tracking-widest px-2 mx-1 uppercase text-slate-300/85">
            Meet Our Team
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-8 max-w-72 sm:max-w-lg md:max-w-2xl xl:max-w-7xl">
        <div className="h-fit gap-4 text-4xl md:text-6xl font-bold text-center bg-opacity-50 text-transparent">
          <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text">
            Magic Minds
          </span>{" "}
          <span className="bg-clip-text bg-gradient-to-b from-neutral-50 to-neutral-400">
            Team
          </span>
        </div>
        <p className="text-center text-neutral-300/85 tracking-wider">
          Our team is a blend of passionate artists, technical wizards, and
          creative problem-solvers. Together, we bring your ideas to life with
          precision, innovation, and a touch of artistry.
          {/* join our team */}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
          <TeamItems members={members} />
        </div>
        <div className="flex flex-row items-center justify-center mt-12 text-white/40">
          <Link
            href={"/team"}
            className="flex flex-row items-center p-2 cursor-pointer"
          >
            <p>More Members</p>
            <ChevronDown className="ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TeamSection;
