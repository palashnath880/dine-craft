import { getPostBySlug } from "@/lib/fetchers";
import moment from "moment";
import { headers } from "next/headers";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";
import { FaCalendarAlt, FaUserAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaRedditAlien,
  FaRegComment,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

export default async function page({ params }: { params: { slug: string } }) {
  const slug = (await params).slug;
  const post = await getPostBySlug(slug);
  const header = await headers();
  const host = header.get("host");
  const protocol = header.get("x-forwarded-proto") || "http";
  const postURL = encodeURIComponent(`${protocol}://${host}/blogs/${slug}`);

  // share links
  const shareLinks = [
    {
      name: "LinkedIn",
      url: `https://www.linkedin.com/sharing/share-offsite/?url=${postURL}`,
      Icon: FaLinkedinIn,
    },
    {
      name: "Facebook",
      url: `https://www.facebook.com/sharer/sharer.php?u=${postURL}`,
      Icon: FaFacebookF,
    },
    {
      name: "Reddit",
      url: `https://www.reddit.com/submit?url=${postURL}&title=${post?.title}`,
      Icon: FaRedditAlien,
    },
    {
      name: "Twitter",
      url: `https://twitter.com/intent/tweet?url=${postURL}&text=${post?.title}`,
      Icon: FaXTwitter,
    },
    {
      name: "Whatsapp",
      url: `https://api.whatsapp.com/send?text=${postURL}`,
      Icon: FaWhatsapp,
    },
  ];

  // if post not found
  if (!post) {
    notFound();
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="flex gap-10">
          <div className="bg-primary/5 w-5/7 rounded-lg px-5 py-10 shadow">
            <article className="flex flex-col gap-5">
              <div className="flex flex-col gap-3">
                <h1 className="text-4xl font-playball font-semibold text-secondary/90">
                  {post.title}
                </h1>
                <div className="flex items-center gap-6 text-gray-500">
                  <h6 className="flex items-center gap-2 font-medium ">
                    <FaUserAlt />
                    <span>Jhon Due</span>
                  </h6>
                  <span className=" font-medium flex items-center gap-2 max-sm:text-sm">
                    <FaCalendarAlt />
                    {moment(post.created_at).format("ll")}
                  </span>
                  <span className=" font-medium flex items-center gap-2 max-sm:text-sm">
                    <FaRegComment />
                    {post.comments_count}{" "}
                    {post.comments_count > 1
                      ? "comments"
                      : post.comments_count <= 0
                      ? "No Comment"
                      : "comment"}
                  </span>
                </div>
              </div>
              <div className="aspect-auto rounded-xl overflow-hidden mt-5">
                <Image
                  draggable={false}
                  width={500}
                  height={300}
                  src={post.img_url}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <article>
                <p className="max-sm:text-sm leading-7 text-justify text-secondary/70">
                  {post.description}
                </p>
              </article>

              {/* comments area */}
            </article>

            {/* share article area */}
            <div className="flex items-center gap-4 mt-10">
              <h6 className="text-sm font-medium text-secondary">
                Share this:
              </h6>
              <div className="flex items-center gap-4">
                {shareLinks.map(({ Icon, url, name }) => (
                  <a
                    href={url}
                    target="_blank"
                    title={name}
                    rel="nofollow noopener noreferrer"
                  >
                    <Icon fontSize={22} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="bg-primary/5 w-2/7 rounded-lg px-5 py-10 shadow"></div>
        </div>
      </div>
    </section>
  );
}
