import React from "react";
import BlogItem from "../shared/BlogItem";
import SectionHeading from "./SectionHeading";
import Link from "next/link";
import { getPosts } from "@/lib/fetchers";

export default async function BlogArea() {
  const posts = await getPosts();
  const filteredPosts = posts
    .sort((a, b) => b.comments_count - a.comments_count)
    .slice(0, 6);

  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading title="Our Blog" subtitle="Be First Who Read News" />

        <div className="grid grid-cols-12 sm:gap-x-8 gap-y-10 mt-16 overflow-hidden">
          {filteredPosts.map((item) => (
            <BlogItem key={item.id} {...item} />
          ))}
        </div>

        <div className="flex items-center justify-center mt-10">
          <Link href={"/blogs"} className="btn-primary">
            Show More
          </Link>
        </div>
      </div>
    </section>
  );
}
