import React from "react";
import { Card, CardHeader, CardContent, CardDescription } from "../ui/card";
import Image from "next/image";
import Link from "next/link";

interface TeamItemsProps {
  members: {
    name: string;
    role: string;
    division: string;
    link: string;
  }[];
}

const TeamItems = ({ members }: TeamItemsProps) => {
  return (
    <>
      {members.map((item, idx) => (
        <Link href={item.link} key={idx}>
          <Card className="bg-transparent border-none hover:border hover:border-primary">
            <CardHeader className="items-center">
              <Image src={"/team.jpeg"} alt="" width={160} height={230} />
            </CardHeader>
            <CardContent className="flex flex-col gap-1 text-center">
              <CardDescription className="role tracking-wider">
                <h6 className="text-indigo-400">{item.division}</h6>
              </CardDescription>
              <h3 className="name">
                <span className="tracking-wider font-semibold">
                  {item.name}
                </span>
              </h3>
              <h5 className="division text-muted-foreground">{item.role}</h5>
            </CardContent>
          </Card>
        </Link>
      ))}
    </>
  );
};

export default TeamItems;
