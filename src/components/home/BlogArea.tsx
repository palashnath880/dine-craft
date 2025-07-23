import React from "react";
import BlogItem from "../shared/BlogItem";
import SectionHeading from "./SectionHeading";

export default function BlogArea() {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading title="Our Blog" subtitle="Be First Who Read News" />

        <div className="grid grid-cols-12 gap-x-8 gap-y-10 mt-16">
          {[...Array(6)].map((_, index) => (
            <BlogItem key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
