import AboutArea from "@/components/home/AboutArea";
import BlogArea from "@/components/home/BlogArea";
import BookingArea from "@/components/home/BookingArea";
import EventsArea from "@/components/home/EventsArea";
import FactArea from "@/components/home/FactArea";
import HeroArea from "@/components/home/HeroArea";
import MenuArea from "@/components/home/MenuArea";
import ServiceArea from "@/components/home/ServiceArea";
import TeamArea from "@/components/home/TeamArea";
import TestimonialArea from "@/components/home/TestimonialArea";
import React from "react";

export default function page() {
  return (
    <>
      {/* Modal Search Start */}
      <div
        className="modal fade"
        id="searchModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content rounded-0">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Search by keyword
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body d-flex align-items-center">
              <div className="input-group w-75 mx-auto d-flex">
                <input
                  type="search"
                  className="form-control bg-transparent p-3"
                  placeholder="keywords"
                  aria-describedby="search-icon-1"
                />
                <span id="search-icon-1" className="input-group-text p-3">
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Modal Search End */}

      {/* Hero Start */}
      <HeroArea />
      {/* Hero End */}

      {/* About area */}
      <AboutArea />

      {/* Fact Start*/}
      <FactArea />

      {/* Service area */}
      <ServiceArea />

      {/* Events area  */}
      <EventsArea />

      {/* Menu area  */}
      <MenuArea />

      {/* Booking area */}
      <BookingArea />

      {/* Team area */}
      <TeamArea />

      {/* Testimonial area  */}
      <TestimonialArea />

      {/* Blog area */}
      <BlogArea />
    </>
  );
}
