"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaUsersCog } from "react-icons/fa";
import { FaCheck, FaUsers } from "react-icons/fa6";
import { IoIosPlay } from "react-icons/io";
import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "motion/react";

// Counter component
const Counter = ({ count }: { count: number }) => {
  // states
  const ref = useRef(null);
  const value = useMotionValue(0);
  const rounded = useTransform(() => Math.round(value.get()));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(value, count, { duration: 3 });

    return () => controls.stop();
  }, [count, isInView]);

  return (
    <motion.h1 ref={ref} className="text-5xl font-playball font-bold">
      {rounded}
    </motion.h1>
  );
};

// FactArea component
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
      <section className="py-16 bg-primary/10">
        <div className="container">
          <div className="flex max-lg:flex-col gap-14 max-lg:gap-5 lg:items-center">
            <div className="w-full lg:w-7/12">
              <div className="grid max-md:grid-cols-4 md:grid-cols-12 gap-5">
                <div className="col-span-4 bg-primary rounded-xl pb-10 pt-7">
                  <div className="flex flex-col gap-5 p-4 justify-start items-center text-center">
                    <FaUsers className="text-white text-7xl" />
                    <Counter count={689} />
                    <p className="uppercase font-semibold">Happy Customers</p>
                  </div>
                </div>
                <div className="col-span-4 bg-primary rounded-xl pb-10 pt-7">
                  <div className="flex flex-col gap-5 p-4 justify-start items-center text-center">
                    <FaUsersCog className="text-white text-7xl" />
                    <Counter count={107} />
                    <p className="uppercase font-semibold">Expert Chefs</p>
                  </div>
                </div>
                <div className="col-span-4 bg-primary rounded-xl pb-10 pt-7">
                  <div className="flex flex-col gap-5 p-4 justify-start items-center text-center">
                    <FaCheck className="text-white text-7xl" />
                    <Counter count={253} />
                    <p className="uppercase font-semibold">Events Complete</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12">
              <div className="aspect-[16/12] w-full relative rounded-lg overflow-hidden">
                <Image
                  width={400}
                  height={400}
                  src={"/img/fact.jpg"}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="w-full h-full top-0 left-0 absolute grid place-items-center">
                  <motion.button
                    type="button"
                    className="w-20 h-20 bg-white rounded-full grid place-items-center cursor-pointer"
                    onClick={() => setIsOpen(true)}
                    initial={{ transform: "scale(1)" }}
                    animate={{ transform: "scale(1.2)" }}
                    transition={{
                      repeat: Infinity,
                      duration: 1,
                      repeatType: "mirror",
                      ease: "easeInOut",
                    }}
                  >
                    <IoIosPlay className="text-secondary text-5xl" />
                  </motion.button>
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
          {/* pb-[56.25%] */}
          <div className="modal-body w-[90%] md:w-2xl lg:w-4xl aspect-video relative overflow-hidden">
            <iframe
              className="w-full h-full absolute top-0 left-0"
              src="https://www.youtube.com/embed/GcDXopVBN-k?si=oV9Q3CTAuSXaKcyd"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
}
