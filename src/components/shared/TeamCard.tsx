import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

type TeamCardProps = {
  name: string;
  title: string;
  imgURL: string;
};

export default function TeamCard({ name, imgURL, title }: TeamCardProps) {
  return (
    <div
      className="col-span-3"
      style={{
        backgroundImage:
          "linear-gradient( #000000c2, #323949), url(/img/catering.webp)",
        backgroundRepeat: "repeat-y",
        backgroundSize: "contain",
      }}
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col items-center gap-1 pt-10">
          <h6 className="uppercase font-semibold text-white">{name}</h6>
          <p className="text-gray-300">{title}</p>
          <div className="flex items-center text-white gap-1 mt-4">
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-primary hover:text-secondary duration-300 transition"
            >
              <FaFacebookF fontSize={18} />
            </Link>
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-primary hover:text-secondary duration-300 transition"
            >
              <FaInstagram fontSize={18} />
            </Link>
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-primary hover:text-secondary duration-300 transition"
            >
              <FaTwitter fontSize={18} />
            </Link>
            <Link
              href={"#"}
              className="p-3 rounded-full hover:bg-primary hover:text-secondary duration-300 transition"
            >
              <FaLinkedin fontSize={18} />
            </Link>
          </div>
        </div>
        <div className="w-full overflow-hidden aspect-[3/4]">
          <Image
            src={imgURL}
            width={200}
            height={200}
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
