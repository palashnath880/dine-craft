import React from "react";
import SectionHeading from "./SectionHeading";
import MenuItem from "../shared/MenuItem";
import { getMenus } from "@/lib/fetchers";

type MenuItem = {
  img: string;
  name: string;
};

export default async function MenuArea() {
  const menus = await getMenus();
  const filteredMenus = menus.sort((a, b) => b.price - a.price).slice(1, 6);

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

          <div className="tab-content">
            <div className="grid grid-cols-12 gap-x-14 gap-y-10">
              {filteredMenus.map((item) => (
                <MenuItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
