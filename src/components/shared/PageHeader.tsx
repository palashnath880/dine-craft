import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa6";

type PageHeaderProps = { name: string; bgImg?: string };

export default function PageHeader({ name, bgImg }: PageHeaderProps) {
  const bgStyle: React.CSSProperties = {
    backgroundImage: `linear-gradient(#00000090,#00000090), url(${bgImg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <section style={bgImg ? bgStyle : {}}>
      <div className="container py-20">
        <div className="flex flex-col items-center gap-7">
          <h1
            className={`text-7xl font-playball ${
              bgImg ? "text-white" : "text-secondary"
            }`}
          >
            {name}
          </h1>
          <ul className="flex items-center gap-1">
            <li>
              <Link
                href={"/"}
                className={`font-semibold ${
                  bgImg ? "text-white" : "text-secondary"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <FaChevronRight fontSize={16} className="text-primary" />
            </li>
            <li>
              <Link
                href={""}
                className={`font-semibold ${
                  bgImg ? "text-gray-300" : "text-gray-400"
                }`}
              >
                {name}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
