import React from "react";

export default function SectionHeading({
  subtitle,
  title,
  color = "secondary",
}: {
  title: string;
  subtitle: string;
  color?: "primary" | "secondary";
}) {
  return (
    <div className="flex flex-col items-center gap-5">
      <small
        className={`font-semibold uppercase border-2 border-primary rounded-full px-4 py-1 text-${color}`}
      >
        {title}
      </small>
      <h1 className={`font-bold font-playball text-5xl text-${color}`}>
        {subtitle}
      </h1>
    </div>
  );
}
