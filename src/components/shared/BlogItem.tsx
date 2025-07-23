import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function BlogItem() {
  return (
    <div className="col-span-12 sm:col-span-6 lg:col-span-4">
      <div className="flex flex-col">
        <div className="overflow-hidden rounded-md aspect-[16/12] cursor-pointer relative">
          <Link href={"/"} className="w-full h-full">
            <Image
              draggable={false}
              width={300}
              height={300}
              src="/img/blog-1.jpg"
              className="w-full h-full object-cover"
              alt=""
            />
          </Link>
          {/* category */}
          <Link
            href={"/blog/category"}
            className="top-4 right-3 bg-primary text-white absolute uppercase text-sm px-3 py-1 rounded-full font-semibold"
          >
            Category One
          </Link>
        </div>
        <div className="mx-4 -mt-8 flex flex-col rounded-md bg-secondary px-3 py-4 z-10">
          <div className="text-primary flex flex-col gap-2">
            <h1 className="text-gray-100 text-xl font-semibold">
              <Link href={"/blog/slug"}>Post Title</Link>
            </h1>
            <p className="text-gray-400 text-sm">
              Lorem ipsum is a dummy or placeholder text commonly used in
              graphic design, publishing, and web development.
            </p>
            <div className="flex items-center font-playball mt-5">
              <p className="flex-1/2 text-center">16 Sep, 2025</p>
              <div className="w-[1px] bg-primary h-[-webkit-fill-available]" />
              <p className="flex-1/2 text-center">0 comments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
