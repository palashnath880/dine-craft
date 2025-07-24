import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight, FaShare } from "react-icons/fa6";

export default function AboutArea() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid grid-cols-12 gap-20 items-center">
          <div className="col-span-5">
            <Image
              fetchPriority="low"
              width={400}
              height={400}
              draggable={false}
              src="/img/about.jpg"
              className="w-full h-full object-cover rounded-lg"
              alt=""
            />
          </div>

          <div className="col-span-7">
            <div className="flex flex-col items-start gap-5">
              <small className="font-semibold uppercase border-2 border-primary rounded-full px-4 py-1">
                About Us
              </small>
              <h1 className="font-playball text-5xl">
                Trusted By 200 + satisfied clients
              </h1>
              <p className="text-gray-500">
                Consectetur adipisicing elit, sed do eiusmod tempor incididunt
                ut labore eit esdioilore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullaemco laboeeiris nisi ut aliquip ex
                ea commodo consequat. Duis aute irure dolor iesdein
                reprehendeerit in voluptate velit esse cillum dolore.
              </p>

              <div className="grid grid-cols-2 w-full space-x-5 space-y-6">
                <div className="col-span-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <FaShare className="text-primary" />
                    Fresh and Fast food Delivery
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <FaShare className="text-primary" />
                    24/7 Customer Support
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <FaShare className="text-primary" />
                    Easy Customization Options
                  </p>
                </div>
                <div className="col-span-1">
                  <p className="font-semibold flex gap-2 items-center">
                    <FaShare className="text-primary" />
                    Delicious Deals for Delicious Meals
                  </p>
                </div>
              </div>
              <Link
                href="/about"
                className="btn-primary flex items-center gap-2"
              >
                About Us <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
