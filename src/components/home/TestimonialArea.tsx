"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import testimonials from "../../../mock-data/testimonial.json";
import { Testimonial } from "@/interfaces/testimonial";
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";
import { RiDoubleQuotesL } from "react-icons/ri";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// rating component
const Rating = ({ rating }: { rating: number }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<IoMdStar key={i} fontSize={20} />);
    } else if (rating >= i - 0.5) {
      stars.push(<IoMdStarHalf key={i} fontSize={20} />);
    } else {
      stars.push(
        <IoMdStarOutline key={i} fontSize={20} className="text-secondary/50" />
      );
    }
  }

  return <div className="flex items-center gap-1">{stars}</div>;
};

export default function TestimonialArea() {
  const data = testimonials as Testimonial[];

  // slider container ref
  const containerRef = useRef<HTMLDivElement | null>(null);

  // slider ref
  const sliderRef = useRef<Slider | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (container) {
      const width = container.clientWidth; // get width
      const slides: NodeListOf<HTMLDivElement> =
        container.querySelectorAll("div.slick-slide");
      const highestHeight = Array.from(slides).map((e) => e.clientHeight);
      console.log(highestHeight);

      const slider: HTMLDivElement | null =
        container.querySelector("div.slick-slider");
      if (!slider) return;

      slider.style.width = `${width}px`; // set width in the slider
      // slider.style.height = `${slider.clientHeight + 5}px`; // set height in the slider

      // get slider height
      const height = slider.clientHeight;

      // set height the all slick-slide

      slides.forEach((ele) => {
        // ele.style.height = `${height}px`;
      });
    }
  }, []);

  return (
    <section className="py-16" id="testimonial">
      <div className="container">
        <div className="flex max-lg:flex-col max-lg:gap-20 gap-10 bg-primary/10 shadow-xl max-sm:px-4 px-8 py-10 rounded-xl">
          <div className="w-full lg:w-1/5">
            <div className="flex flex-col gap-2 items-start">
              <small
                className={`font-semibold uppercase border-2 border-primary rounded-full px-4 py-1 text-sm`}
              >
                Testimonial
              </small>
              <h5 className="font-playball text-2xl font-medium">
                What Our Customers says!
              </h5>

              <p className="text-secondary/70 max-lg:mt-5 mt-10">
                {`Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.`}
              </p>
            </div>
          </div>
          <div className="w-full lg:w-4/5">
            <div className="w-full">
              <div ref={containerRef}>
                <Slider
                  dots={false}
                  infinite
                  speed={500}
                  slidesToShow={3}
                  slidesToScroll={1}
                  initialSlide={3}
                  className="testimonial-slider"
                  adaptiveHeight={false}
                  arrows={false}
                  ref={sliderRef}
                  responsive={[
                    {
                      breakpoint: 1400,
                      settings: {
                        slidesToShow: 3,
                        initialSlide: 3,
                      },
                    },
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2,
                        initialSlide: 2,
                      },
                    },
                    {
                      breakpoint: 500,
                      settings: {
                        slidesToShow: 1,
                        initialSlide: 1,
                      },
                    },
                  ]}
                >
                  {data.map((item, index) => (
                    <div
                      className="rounded-xl overflow-hidden bg-white shadow-md h-full"
                      key={index}
                    >
                      <div className="flex flex-col h-full">
                        <div className="overflow-hidden aspect-[16/12] ">
                          <Image
                            draggable={false}
                            width={300}
                            height={300}
                            src={item.img_url}
                            className="w-full h-full object-cover"
                            alt={item.name}
                          />
                        </div>

                        <div className="flex flex-col px-4 pb-6 pt-8 flex-1 gap-4 relative">
                          <span className="absolute -top-5 left-4 w-10 h-10 bg-primary rounded-full grid place-items-center z-[10000]">
                            <RiDoubleQuotesL
                              fontSize={24}
                              className="text-white"
                            />
                          </span>

                          <div className="flex flex-1 gap-2 flex-col">
                            <Rating rating={item.rating} />
                            <p className="text-sm text-secondary/80">
                              {item.message}
                            </p>
                          </div>

                          <div className="flex flex-col gap-1">
                            <h4 className="text-base font-semibold">
                              {item.name}
                            </h4>
                            <p className="text-sm h-10">
                              {item.profession} at {item.company}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <div className="flex items-center gap-5 md:gap-10 justify-center">
                  <button
                    className="w-10 h-10 bg-primary/30 rounded-full grid place-items-center cursor-pointer"
                    onClick={() => sliderRef.current?.slickPrev()}
                  >
                    <FaAngleLeft fontSize={20} />
                  </button>
                  <button
                    className="w-10 h-10 bg-primary/30 rounded-full grid place-items-center cursor-pointer"
                    onClick={() => sliderRef.current?.slickNext()}
                  >
                    <FaAngleRight fontSize={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
