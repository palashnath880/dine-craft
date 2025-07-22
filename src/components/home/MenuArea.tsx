import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

type MenuItem = {
  img: string;
  name: string;
};

export default function MenuArea() {
  const menuItems: MenuItem[] = [
    {
      img: "/img/menu-01.jpg",
      name: "Paneer",
    },
    {
      img: "/img/menu-02.jpg",
      name: "Sweet Potato",
    },
    {
      img: "/img/menu-03.jpg",
      name: "Sabudana Tikki",
    },
    {
      img: "/img/menu-04.jpg",
      name: "Pizza",
    },
    {
      img: "/img/menu-05.jpg",
      name: "Bacon",
    },
    {
      img: "/img/menu-06.jpg",
      name: "Chicken",
    },
    {
      img: "/img/menu-07.jpg",
      name: "Blooming",
    },
    {
      img: "/img/menu-08.jpg",
      name: "Sweet",
    },
  ];

  const tabs = [
    {
      label: "Starter",
    },
    {
      label: "Main Course",
    },
    {
      label: "Drinks",
    },
    {
      label: "Offers",
    },
    {
      label: "Our Special",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <SectionHeading
          title="Our Menu"
          subtitle="Most Popular Food in the World"
        />

        <div className="mt-10 flex flex-col gap-10">
          {/* tab buttons */}
          <ul className="flex justify-center gap-4 items-center">
            {tabs.map(({ label }, index) => (
              <li
                className="btn-primary border border-primary !py-1.5"
                key={index}
              >
                {label}
              </li>
            ))}
          </ul>

          <div className="tab-content">
            <div className="grid grid-cols-12 gap-x-14 gap-y-10">
              {menuItems.map(({ img, name }, index) => (
                <div className="col-span-6" key={index}>
                  <div className="flex items-center gap-5">
                    <Image
                      draggable={false}
                      width={200}
                      height={200}
                      className="rounded-full w-40 object-cover"
                      src={img}
                      alt={name}
                    />
                    <div className="flex-1 flex flex-col gap-3">
                      <div className="flex justify-between items-center">
                        <h4 className="text-2xl font-semibold">{name}</h4>
                        <h4 className="text-primary font-playball text-2xl font-bold">
                          $90
                        </h4>
                      </div>
                      <div className="h-[1px] bg-primary" />
                      <p className="text-left text-gray-400">
                        Consectetur adipiscing elit sed dwso eiusmod tempor
                        incididunt ut labore.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
