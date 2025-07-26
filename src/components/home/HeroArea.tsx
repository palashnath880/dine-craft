import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroArea() {
  return (
    <div className="bg-gray-50 py-6">
      <div className="container">
        <div className="grid grid-cols-12 items-center">
          <div className="col-span-7 max-md:col-span-12">
            <div className="flex flex-col items-start">
              <small className="text-base font-bold text-secondary border border-primary uppercase px-4 py-1 rounded-full">
                Welcome to DineCraft
              </small>

              <h1 className="text-7xl font-bold text-secondary font-playball leading-24">
                Book <span className="text-primary">Dine</span>Craft <br /> For
                Your Dream Event
              </h1>

              <div className="flex items-center gap-5 mt-10">
                <Link
                  href=""
                  className="bg-primary text-secondary rounded-full py-3 px-8 font-medium"
                >
                  Book Now
                </Link>
                <Link
                  href=""
                  className="bg-primary text-secondary rounded-full py-3 px-8 font-medium"
                >
                  Know More
                </Link>
              </div>
            </div>
          </div>

          <div className="col-span-5 max-md:col-span-12">
            <div className="w-full h-auto px-5">
              <Image
                priority
                width={200}
                height={200}
                draggable={false}
                src="/img/hero.png"
                className="w-full h-full object-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
