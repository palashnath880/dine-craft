import React from "react";

export default function loading() {
  return (
    <div className="container py-20">
      <div className="flex gap-10 max-md:flex-col">
        <div className="bg-primary/5 w-full md:w-5/7 rounded-lg px-5 py-10 shadow h-[40vh] md:h-[50vh] animate-pulse">
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3">
              <div className="text-4xl font-playball font-semibold text-secondary/90 animate-pulse h-10 animate-pulse"></div>
              <div className="flex items-center gap-6 text-gray-500">
                <h6 className="flex items-center gap-2 font-medium "></h6>
                <span className=" font-medium flex items-center gap-2 max-sm:text-sm"></span>
                <span className=" font-medium flex items-center gap-2 max-sm:text-sm"></span>
              </div>
            </div>
            <div className="aspect-auto rounded-xl overflow-hidden mt-5"></div>
            <div>
              <p className="max-sm:text-sm leading-7 text-justify text-secondary/70"></p>
            </div>
          </div>
        </div>
        <div className="bg-primary/5 w-full md:w-2/7 rounded-lg px-5 py-10 shadow h-[40vh] md:h-[50vh] animate-pulse"></div>
      </div>
    </div>
  );
}
