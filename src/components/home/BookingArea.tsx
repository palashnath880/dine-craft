import React from "react";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

export default function BookingArea() {
  return (
    <section
      className="py-16"
      style={{
        backgroundImage:
          "linear-gradient(#00000050,#00000050), url(/img/booking-area-img.webp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundBlendMode: "multiply",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="container">
        <div className="flex flex-col gap-20 items-center">
          <SectionHeading
            subtitle="Where you want Our Services"
            title="Book Us"
            color="primary"
          />
          <Link href={"/booking"} className="btn-primary">
            Book Now
          </Link>
        </div>
      </div>
    </section>
  );
}
