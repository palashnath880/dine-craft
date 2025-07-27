import Image from "next/image";
import React from "react";

type MenuItemProps = {
  title: string;
  price: number;
  imgURL: string;
  type: "veg" | "nonveg";
  category: string;
  description: string;
  // className?: React.HTMLAttributes<HTMLDivElement>.className;
};

export default function MenuItem(props: MenuItemProps) {
  // props destructuring
  const { description, price, title, type } = props;

  // generate a random number 1 to 10
  const randomNumber = (Math.floor(Math.random() * 10) + 1)
    .toString()
    .padStart(2, "0");

  return (
    <div className="col-span-12 md:col-span-6">
      <div className="flex items-center gap-5 w-full">
        <Image
          draggable={false}
          width={200}
          height={200}
          className="rounded-full max-sm:w-28 w-40 object-cover cursor-pointer"
          src={`/img/menu-${randomNumber}.jpg`}
          alt={title}
        />
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex justify-between items-center">
            <h4 className="text-xl sm:text-2xl font-semibold">{title}</h4>
            <h4 className="text-primary font-playball text-xl sm:text-2xl font-bold">
              ${price}
            </h4>
          </div>
          <div className="h-[1px] bg-primary" />
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-5">
              <span className="btn-primary !py-1 !px-3 !text-sm !capitalize">
                {type}
              </span>
            </div>
            <p className="text-left text-gray-400">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
