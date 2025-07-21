import Link from "next/link";
import React from "react";
import SearchModal from "./SearchModal";

export default function Header() {
  const menus = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Services",
      href: "/service",
    },
    {
      label: "Events",
      href: "/events",
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
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-4">
          {/* branding */}
          <Link href={"/"} className="w-3/12">
            <h1 className="text-primary font-bold !text-4xl font-playball">
              Dine<span className="text-secondary">Craft</span>
            </h1>
          </Link>

          {/* menu button */}
          <button className="hidden py-2 px-3" type="button">
            <span className="fa fa-bars text-primary"></span>
          </button>

          {/* menus start */}
          <div className="flex gap-7 flex-1 justify-center">
            {menus.map(({ href, label }, index) => (
              <Link
                href={href}
                key={index}
                className="font-semibold text-gray-500 hover:text-primary transition duration-300"
              >
                {label}
              </Link>
            ))}

            {/* <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light">
                  <a href="book.html" className="dropdown-item">
                    Booking
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Our Blog
                  </a>
                  <a href="team.html" className="dropdown-item">
                    Our Team
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div> */}
          </div>
          {/* menus end */}

          <div className="flex items-center justify-end-safe gap-3 w-3/12">
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
