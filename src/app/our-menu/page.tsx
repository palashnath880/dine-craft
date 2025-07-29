import SectionHeading from "@/components/home/SectionHeading";
import MenuItem from "@/components/shared/MenuItem";
import PageHeader from "@/components/shared/PageHeader";
import { getMenus } from "@/lib/fetchers";
import Link from "next/link";
import React from "react";

export default async function page() {
  const menus = await getMenus();

  const categories = [
    "Starter",
    "Main Course",
    "Drinks",
    "Offers",
    "Our Special",
  ];

  return (
    <>
      <PageHeader name="Our Menu" bgImg="/img/menu-items.webp" />

      <section className="py-16">
        <div className="container">
          <SectionHeading
            subtitle="Most Popular Food in the World"
            title="Our Menu"
          />

          <div className="mt-10 flex flex-col gap-10">
            {/* tab buttons */}
            <ul className="flex justify-center gap-4 items-center">
              {categories.map((category, index) => (
                <li key={index}>
                  <Link
                    className="btn-primary border border-primary !py-1.5"
                    href={`/our-menu?category=${category}`}
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="tab-content">
              <div className="grid grid-cols-12 md:gap-x-14 gap-y-10">
                {menus.map((item) => (
                  <MenuItem {...item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
