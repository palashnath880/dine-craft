import BlogItem from "@/components/shared/BlogItem";
import PageHeader from "@/components/shared/PageHeader";
import { getPosts } from "@/lib/fetchers";
import React from "react";

export default async function page() {
  const posts = await getPosts();

  return (
    <>
      <PageHeader name="Blogs" />

      <section className="py-16 bg-primary/5">
        <div className="container">
          <div className="grid grid-cols-12 gap-x-8 gap-y-10 mt-16">
            {posts.map((item) => (
              <BlogItem key={item.id} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
