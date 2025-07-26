import React from "react";
import BlogItem from "../shared/BlogItem";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

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
        <div className="flex items-center justify-center mt-10">
          <Link href={"/blog"} className="btn-primary">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}
