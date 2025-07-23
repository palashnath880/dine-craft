import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

export default function PageHeader({ name }: { name: string }) {
  return (
    <section>
      <div className="container py-20">
        <div className="flex flex-col items-center gap-7">
          <h1 className="text-7xl font-playball">{name}</h1>
          <ul className="flex items-center gap-1">
            <li>
              <Link href={"/"} className="font-semibold">
                Home
              </Link>
            </li>
            <li>
              <FaChevronRight fontSize={16} className="text-primary" />
            </li>
            <li>
              <Link href={""} className="font-semibold text-gray-400">
                {name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
