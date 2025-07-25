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
      <HeroArea />

      <AboutArea />

      <FactArea />

      <ServiceArea />

      <EventsArea />

      <MenuArea />

      <BookingArea />

      <TeamArea />

      <TestimonialArea />

      <BlogArea />
    </>
  );
}
