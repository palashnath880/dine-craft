import React from "react";
import SectionHeading from "./SectionHeading";
import TeamCard from "../shared/TeamCard";
import Link from "next/link";
import { getTeamMembers } from "@/lib/fetchers";

export default async function TeamArea() {
  const members = (await getTeamMembers()).slice(0, 4);

  return (
    <section className="bg-gray-50 py-16">
      <div className="container">
        <SectionHeading
          title="Our Team"
          subtitle="We have experienced chef Team"
        />
        <div className="grid max-md:grid-cols-6 max-sm:grid-cols-3 grid-cols-12 gap-5 mt-16">
          {members.map((member) => (
            <TeamCard key={member.id} {...member} />
          ))}
        </div>
        <div className="mt-16 flex justify-center">
          <Link href={"/our-team"} className="btn-primary">
            More
          </Link>
        </div>
      </div>
    </section>
  );
}
