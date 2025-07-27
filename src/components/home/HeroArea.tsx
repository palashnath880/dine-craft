import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroArea() {
  return (
    <section className="bg-primary/10 py-16">
      <div className="container">
        <div className="grid grid-cols-12 items-center max-lg:gap-20">
          <div className="col-span-12 lg:col-span-7 max-lg:order-2">
            <div className="flex flex-col items-start max-md:gap-5">
              <small className="text-base font-bold text-secondary border border-primary uppercase px-4 py-1 rounded-full">
                Welcome to DineCraft
              </small>

              <h1 className="max-md:text-4xl text-7xl font-bold text-secondary font-playball max-md:leading-12 leading-24">
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

          <div className="col-span-12 lg:col-span-5 max-lg:order-1">
            <div className="w-full px-5">
              <Image
                priority
                width={200}
                height={200}
                draggable={false}
                src="/img/hero.png"
                className="w-full object-contain"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
