import Image from "next/image";
import React from "react";
import SectionHeading from "./SectionHeading";

export default function EventsArea() {
  const tabs = [
    {
      label: "All Events",
    },
    {
      label: "Wedding",
    },
    {
      label: "Corporate",
    },
    {
      label: "Cocktail",
    },
    {
      label: "Buffet",
    },
  ];

  return (
    <section className="py-16" id="events">
      <div className="container">
        <SectionHeading
          title="Latest Events"
          subtitle="Our Social & Professional Events Gallery"
        />

        <div className="mt-16 flex flex-col gap-10">
          {/* tab buttons */}
          <ul className="flex justify-center gap-4 items-center flex-wrap">
            {tabs.map(({ label }, index) => (
              <li
                className="btn-primary border border-primary !py-1.5"
                key={index}
              >
                {label}
              </li>
            ))}
          </ul>

          {/* tab content */}
          <div className="grid grid-cols-12 gap-5">
            {[...Array(8)].map((_, index) => (
              <div
                className="col-span-6 lg:col-span-3 cursor-pointer group"
                key={index}
              >
                <div className="relative aspect-square rounded-lg overflow-hidden">
                  <Image
                    draggable={false}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover"
                    src={`/img/event-${index + 1}.jpg`}
                    alt=""
                  />
                  <div className="absolute top-0 left-0 w-full h-full bg-[#00000055] grid place-items-center invisible opacity-0 group-hover:visible group-hover:opacity-100 transition duration-300">
                    <h4 className="text-2xl font-semibold text-white">
                      Wedding
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
