import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import { FaHamburger, FaWalking } from "react-icons/fa";
import {
  FaCheese,
  FaHotdog,
  FaPizzaSlice,
  FaUtensils,
  FaWheelchair,
  FaWineGlass,
} from "react-icons/fa6";

type Service = {
  Icon: IconType;
  title: string;
  content: string;
};

export default function ServiceArea() {
  const services: Service[] = [
    {
      title: "Wedding Services",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaCheese,
    },
    {
      title: "Corporate Catering",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaPizzaSlice,
    },
    {
      title: "Cocktail Reception",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaHotdog,
    },
    {
      title: "Bento Catering",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaHamburger,
    },
    {
      title: "Pub Party",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaWineGlass,
    },
    {
      title: "Home Delivery",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaWalking,
    },
    {
      title: "Sit-down Catering",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaWheelchair,
    },
    {
      title: "Buffet Catering",
      content: "Contrary to popular belief, ipsum is not simply random.",
      Icon: FaUtensils,
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="container">
        <div className="flex flex-col items-center gap-5">
          <small className="font-semibold uppercase border-2 border-primary rounded-full px-4 py-1">
            Our Services
          </small>
          <h1 className="font-bold font-playball text-5xl">What We Offer</h1>
        </div>

        <div className="mt-10 grid grid-cols-12 gap-5">
          {services.map(({ Icon, content, title }, index) => (
            <div
              key={index}
              className="xl:col-span-3 md:col-span-6 col-span-12"
            >
              <div className="h-full rounded-lg bg-white shadow-md cursor-pointer hover:shadow-none transition duration-300">
                <div className="flex flex-col items-center justify-center py-10 px-5 gap-5">
                  <div className="flex flex-col gap-2.5 items-center text-center flex-1">
                    <Icon className="text-primary text-8xl" />
                    <h4 className="text-2xl font-semibold mt-2">{title}</h4>
                    <p className="text-gray-400">{content}</p>
                  </div>
                  <Link href="#" className="btn-primary">
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
