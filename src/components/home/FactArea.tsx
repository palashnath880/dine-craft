"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { FaCheck, FaUsers } from "react-icons/fa6";
import { IoIosPlay } from "react-icons/io";

export default function FactArea() {
  // state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // outside click detect
  useEffect(() => {
    const closeModal = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const modal = target.closest(".modal");
      const modalBody = target.closest(".modal-body");
      if (modal && modal.classList.contains("visible") && !modalBody) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", closeModal);

    return () => window.removeEventListener("click", closeModal);
  }, []);

  return (
    <>
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid grid-cols-12 gap-14 items-center">
            <div className="col-span-7">
              <div className="grid grid-cols-12 gap-5">
                <div className="col-span-4 bg-primary rounded-xl">
                  <div className="flex flex-col gap-5 p-4 justify-start items-center">
                    <FaUsers className="text-white text-7xl" />
                    <h1 className="text-5xl font-playball font-bold">689</h1>
                    <p className="uppercase font-semibold">Happy Customers</p>
                  </div>
                </div>
                <div className="col-span-4 bg-primary rounded-xl">
                  <div className="flex flex-col gap-5 p-4 justify-start items-center">
                    <FaUsersCog className="text-white text-7xl" />
                    <h1 className="text-5xl font-playball font-bold">107</h1>
                    <p className="uppercase font-semibold">Expert Chefs</p>
                  </div>
                </div>
                <div className="col-span-4 bg-primary rounded-xl">
                  <div className="flex flex-col gap-5 p-4 justify-start items-center">
                    <FaCheck className="text-white text-7xl" />
                    <h1 className="text-5xl font-playball font-bold">253</h1>
                    <p className="uppercase font-semibold">Events Complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-span-5">
              <div className="aspect-[16/12] w-full relative rounded-lg overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  src={"/img/fact.jpg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-full top-0 left-0 absolute grid place-items-center">
                  <button
                    type="button"
                    className="w-20 h-20 bg-white rounded-full grid place-items-center cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    <IoIosPlay className="text-secondary text-5xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* catering demo video */}
      <div
        className={`modal bg-[#00000095] ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="w-full h-full grid place-items-center">
          <div className="modal-body w-[90%] md:w-2xl lg:w-4xl h-0 pb-[56.25%] relative overflow-hidden">
            {isOpen && (
              <iframe
                className="w-full h-full absolute top-0 left-0"
                src="https://www.youtube.com/embed/GcDXopVBN-k?si=oV9Q3CTAuSXaKcyd"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen={false}
              ></iframe>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
