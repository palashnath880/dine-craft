import { Post } from "@/interfaces/post";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import moment from "moment";

export default function BlogItem(props: Post) {
  // props destructuring
  const {
    category,
    comments_count,
    created_at,
    description,
    slug,
    title,
    img_url,
  } = props;

  // description shorter
  const desc =
    description.length > 150 ? description.slice(0, 150) + "..." : description;

  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="flex flex-col h-full">
        <div className="overflow-hidden rounded-md aspect-[16/11] cursor-pointer relative shadow">
          <Link href={`/blogs/${slug}`} className="w-full h-full">
            <Image
              draggable={false}
              width={300}
              height={300}
              src={img_url}
              className="w-full h-full object-cover"
              alt={title}
            />
          </Link>
          {/* category */}
          <span className="top-4 right-3 bg-primary text-white absolute uppercase text-xs px-3 py-1 rounded-full font-semibold">
            {category}
          </span>
        </div>
        <div className="mx-4 -mt-8 flex flex-col rounded-md bg-secondary px-3 py-4 z-10 flex-1">
          <div className="text-primary flex flex-col h-full">
            <div className="flex flex-col gap-2 flex-1">
              <h1 className="text-gray-100 max-md:text-base text-lg font-semibold">
                <Link href={`/blogs/${slug}`}>{title}</Link>
              </h1>
              <p className="text-gray-400 text-sm">{desc}</p>
            </div>
            <div className="flex items-center font-playball mt-5">
              <p className="flex-1/2 text-center">
                {moment(created_at).format("ll")}
              </p>
              <div className="w-[1px] bg-primary h-[-webkit-fill-available]" />
              <p className="flex-1/2 text-center">
                {comments_count}{" "}
                {comments_count > 1
                  ? "comments"
                  : comments_count <= 0
                  ? "No Comment"
                  : "comment"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
