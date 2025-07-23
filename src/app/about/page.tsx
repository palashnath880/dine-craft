import AboutArea from "@/components/home/AboutArea";
import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader name="About Us" />

      <section className="bg-gray-100 py-16">
        <AboutArea />
      </section>
    </>
  );
}
