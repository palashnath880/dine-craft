import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

export default function page() {
  return (
    <>
      <PageHeader name="Contact" bgImg="/img/contact-bg.webp" />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-16 bg-primary/5 px-16 py-16 shadow-md rounded-2xl">
            <div className="flex flex-col items-start gap-5">
              <small
                className={`font-semibold uppercase border-2 border-primary rounded-full px-4 py-1 text-secondary`}
              >
                Get in touch
              </small>
              <h1 className={`font-bold font-playball text-5xl text-secondary`}>
                Contact Us For Any Queries!
              </h1>
            </div>

            <div className="grid flex-1 grid-cols-12 gap-20">
              <div className="col-span-12 md:col-span-6">
                <form className="flex flex-col gap-5">
                  <input
                    required
                    name="name"
                    type="text"
                    className="w-full rounded-full outline-primary py-3 px-6 border border-primary"
                    placeholder="Your Name"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    className="w-full rounded-full outline-primary py-3 px-6 border border-primary"
                    placeholder="Enter Your Email"
                  />
                  <textarea
                    required
                    name="message"
                    className="w-full rounded-xl outline-primary py-3 px-6 border border-primary mt-5"
                    rows={4}
                    cols={10}
                    placeholder="Your Message"
                  ></textarea>
                  <button className="btn-primary" type="submit">
                    Submit Now
                  </button>
                </form>
              </div>

              <div className="col-span-12 md:col-span-6">
                <div className="flex flex-col gap-5">
                  <div className="flex items-start gap-5 border border-primary p-4 rounded-md">
                    <FaMapMarkerAlt className="text-primary text-4xl" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-secondary font-semibold text-lg">
                        Address
                      </h4>
                      <p className="text-gray-500">123 Street, New York, USA</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 border border-primary p-4 rounded-md">
                    <FaEnvelope className="text-primary text-4xl" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-secondary font-semibold text-lg">
                        Mail Us
                      </h4>
                      <p className="text-gray-500">info@example.com</p>
                      <p className="text-gray-500">support@example.com</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 border border-primary p-4 rounded-md">
                    <FaPhoneAlt className="text-primary text-4xl" />
                    <div className="flex flex-col gap-1">
                      <h4 className="text-secondary font-semibold text-lg">
                        Telephone
                      </h4>
                      <p className="text-gray-500">(+012) 3456 7890 123</p>
                      <p className="text-gray-500">(+704) 5555 0127 296</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
