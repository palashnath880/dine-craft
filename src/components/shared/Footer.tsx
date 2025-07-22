import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowUp, FaCopyright, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaCheck,
  FaClock,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaTwitter,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <>
      <footer
        style={{
          backgroundImage:
            "linear-gradient(#ffffffdb, #ffffffdb), url(/img/food-vector-art.jpg)",
        }}
      >
        <div className="container mx-auto py-10">
          <div className="grid grid-cols-12 gap-5">
            <div className="col-span-3 max-md:col-span-2 max-sm:col-span-1">
              <div className="flex flex-col gap-4 items-start">
                <Link href={"/"}>
                  <h1 className="text-primary font-playball text-4xl font-bold">
                    Dine<span className="text-secondary">Craft</span>
                  </h1>
                </Link>
                <p className="text-base text-gray-500">
                  There cursus massa at urnaaculis estieSed aliquamellus vitae
                  ultrs condmentum leo massamollis its estiegittis miristum.
                </p>
                <div className="flex gap-4">
                  <Link
                    className="w-10 h-10 rounded-full grid place-items-center bg-primary text-secondary"
                    href="https://facebook.com"
                  >
                    <FaFacebookF />
                  </Link>
                  <Link
                    className="w-10 h-10 rounded-full grid place-items-center bg-primary text-secondary"
                    href="https://twitter.com"
                  >
                    <FaTwitter />
                  </Link>
                  <Link
                    href="https://instagram.com"
                    className="w-10 h-10 rounded-full grid place-items-center bg-primary text-secondary"
                  >
                    <FaInstagram />
                  </Link>
                  <Link
                    href="https://linkedin.com"
                    className="w-10 h-10 rounded-full grid place-items-center bg-primary text-secondary"
                  >
                    <FaLinkedin />
                  </Link>
                </div>
              </div>
            </div>

            {/* Special Facilities */}
            <div className="col-span-3 max-md:col-span-2 max-sm:col-span-1">
              <div className="flex flex-col gap-4 items-start">
                <h4 className="text-xl font-semibold">Special Facilities</h4>
                <div className="flex flex-col gap-2.5">
                  <Link
                    className="flex items-center gap-2 text-gray-500 font-medium"
                    href=""
                  >
                    <FaCheck className="text-primary" />
                    Cheese Burger
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-gray-500 font-medium"
                    href=""
                  >
                    <FaCheck className="text-primary" />
                    Sandwich
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-gray-500 font-medium"
                    href=""
                  >
                    <FaCheck className="text-primary" />
                    Panner Burger
                  </Link>
                  <Link
                    className="flex items-center gap-2 text-gray-500 font-medium"
                    href=""
                  >
                    <FaCheck className="text-primary" />
                    Special Sweets
                  </Link>
                </div>
              </div>
            </div>

            {/* contact us */}
            <div className="col-span-3 max-md:col-span-2 max-sm:col-span-1">
              <div className="flex flex-col gap-4 items-start">
                <h4 className="text-xl font-semibold">Contact Us</h4>
                <div className="flex flex-col gap-2.5">
                  <p className="flex gap-2 text-gray-500 font-medium">
                    <FaMapMarkerAlt className="text-primary text-lg" /> 123
                    Street, New York, USA
                  </p>
                  <p className="flex gap-2 text-gray-500 font-medium">
                    <FaPhone className="text-primary text-lg" /> (+012) 3456
                    7890 123
                  </p>
                  <p className="flex gap-2 text-gray-500 font-medium">
                    <FaEnvelope className="text-primary text-lg" />
                    info@example.com
                  </p>
                  <p className="flex gap-2 text-gray-500 font-medium">
                    <FaClock className="text-primary text-lg" /> 26/7 Hours
                    Service
                  </p>
                </div>
              </div>
            </div>

            {/* social gallery */}
            <div className="col-span-3 max-md:col-span-2 max-sm:col-span-1">
              <div className="flex flex-col gap-4 items-start">
                <h4 className="text-xl font-semibold">Social Gallery</h4>
                <div className="grid grid-cols-3 gap-3 w-full">
                  <div className="col-span-1">
                    <Image
                      width={120}
                      height={120}
                      draggable={false}
                      src="/img/menu-01.jpg"
                      className="w-full h-full object-cover rounded-full border-4 border-primary"
                      alt=""
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      width={120}
                      height={120}
                      draggable={false}
                      src="/img/menu-02.jpg"
                      className="w-full h-full object-cover rounded-full border-4 border-primary"
                      alt=""
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      width={120}
                      height={120}
                      draggable={false}
                      src="/img/menu-03.jpg"
                      className="w-full h-full object-cover rounded-full border-4 border-primary"
                      alt=""
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      width={120}
                      height={120}
                      draggable={false}
                      src="/img/menu-04.jpg"
                      className="w-full h-full object-cover rounded-full border-4 border-primary"
                      alt=""
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      width={120}
                      height={120}
                      draggable={false}
                      src="/img/menu-05.jpg"
                      className="w-full h-full object-cover rounded-full border-4 border-primary"
                      alt=""
                    />
                  </div>
                  <div className="col-span-1">
                    <Image
                      width={120}
                      height={120}
                      draggable={false}
                      src="/img/menu-06.jpg"
                      className="w-full h-full object-cover rounded-full border-4 border-primary"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* copyright area */}
        <div className="bg-secondary">
          <div className="container">
            <div className="grid grid-cols-12 gap-5 py-5">
              <div className="col-span-6 text-left ">
                <span className="text-gray-100 flex items-center">
                  <Link
                    href={"/"}
                    className="flex gap-2 items-center underline"
                  >
                    <FaCopyright />
                    DineCraft
                  </Link>
                  , All right reserved.
                </span>
              </div>
              <div className="col-span-6 text-right">
                <span className="text-gray-100 flex items-center gap-1.5 justify-end">
                  Designed By
                  <a
                    className="underline"
                    href="https://palashnath.netlify.app"
                    target="_blank"
                  >
                    Palash Nath
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button className="bg-primary w-10 h-10 grid place-items-center rounded-full cursor-pointer fixed bottom-8 right-8">
        <FaArrowUp />
      </button>
    </>
  );
}
