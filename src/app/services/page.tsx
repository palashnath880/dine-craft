import ServiceArea from "@/components/home/ServiceArea";
import PageHeader from "@/components/shared/PageHeader";
import React from "react";

export default function page() {
  return (
    <section>
      <PageHeader name="Services" bgImg="/img/services-bg.webp" />

      <ServiceArea />
    </section>
  );
}
