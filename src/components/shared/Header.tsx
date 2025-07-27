"use client";

import Link from "next/link";
import React, { useState } from "react";
import SearchModal from "./SearchModal";
import { CiMenuFries } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import clsx from "clsx";

export default function Header() {
  // state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const menus = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/#about",
    },
    {
      label: "Services",
      href: "/#services",
    },
    {
      label: "Events",
      href: "/#events",
    },
    {
      label: "Our Menu",
      href: "/our-menu",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="max-lg:relative">
      <div className="container">
        <nav className="flex items-center justify-between py-4">
          {/* branding */}
          <Link href={"/"} className="lg:w-3/12">
            <h1 className="text-primary font-bold max-sm:text-3xl !text-4xl font-playball">
              Dine<span className="text-secondary">Craft</span>
            </h1>
          </Link>

          {/* menu button */}
          <button
            className="lg:hidden text-2xl"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <IoMdClose strokeWidth={1.5} />
            ) : (
              <CiMenuFries strokeWidth={1.5} />
            )}
          </button>

          {/* menus start */}
          <div
            className={clsx(
              "max-lg:absolute max-lg:top-full max-lg:left-0 max-lg:w-full max-lg:bg-white max-lg:shadow-md",
              {
                "max-lg:opacity-100 max-lg:scale-y-100": isOpen,
                "max-lg:opacity-0 max-lg:scale-y-0": !isOpen,
              },
              "transition-all duration-300 max-lg:origin-top"
            )}
          >
            <ul
              className={clsx(
                "flex gap-7 flex-1 justify-center",
                "max-lg:gap-4 max-lg:flex-col max-lg:px-5 max-lg:py-5 max-lg:bg-primary/5"
              )}
            >
              {menus.map(({ href, label }, index) => (
                <li key={index}>
                  <Link
                    href={href}
                    className="font-semibold text-gray-500 hover:text-primary transition duration-300"
                  >
                    {label}
                  </Link>
                </li>
              ))}

              <li className="lg:hidden flex items-center gap-5 justify-start mt-5">
                <SearchModal />
                <Link
                  href="/booking"
                  className="py-2.5 px-6 bg-primary text-secondary font-semibold rounded-full"
                >
                  Book Now
                </Link>
              </li>
            </ul>
          </div>
          {/* menus end */}

          <div className="flex items-center justify-end-safe gap-3 max-lg:hidden w-3/12">
            {/* search modal*/}
            <SearchModal />

            {/* booking button */}
            <Link
              href="/booking"
              className="py-2.5 px-6 bg-primary text-secondary font-semibold rounded-full"
            >
              Book Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
