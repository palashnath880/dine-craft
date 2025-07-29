"use client";

import PageHeader from "@/components/shared/PageHeader";
import React from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import { ContactForm, contactFormSchema } from "@/schemas/contact.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { RiLoader3Fill } from "react-icons/ri";

export default function Page() {
  // react hook form
  const {
    register,
    formState: { errors, isSubmitting },
    handleSubmit,
  } = useForm<ContactForm>({ resolver: zodResolver(contactFormSchema) });

  // submit handler
  const onSubmit = async (data: ContactForm) => {
    try {
      // TODO: add api call here
      await new Promise((resolve) => {
        setTimeout(() => {
          resolve(data);
        }, 3000);
      });
    } catch (err: any) {
      console.error(err);
    }
  };

  return (
    <>
      <PageHeader name="Contact" bgImg="/img/contact-bg.webp" />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-16 bg-primary/5 max-sm:px-5 max-md:px-10 px-16 py-16 shadow-md rounded-2xl">
            <div className="flex flex-col items-start gap-5">
              <small
                className={`font-semibold uppercase border-2 border-primary rounded-full px-4 py-1 text-secondary`}
              >
                Get in touch
              </small>
              <h1
                className={`font-bold font-playball max-md:text-3xl text-5xl text-secondary`}
              >
                Contact Us For Any Queries!
              </h1>
            </div>

            <div className="flex max-lg:flex-col-reverse gap-20">
              <div className="w-full lg:w-1/2">
                <form
                  className="flex flex-col gap-5"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  {/* name input */}
                  <input
                    {...register("name")}
                    type="text"
                    className={`w-full rounded-full py-3 px-6 border ${
                      errors?.name
                        ? "border-red-400 outline-red-400"
                        : "border-primary outline-primary"
                    }`}
                    placeholder="Your Name"
                  />

                  {/* email input */}
                  <input
                    type="email"
                    {...register("email")}
                    className={`w-full rounded-full py-3 px-6 border ${
                      errors.email
                        ? "border-red-400 outline-red-400"
                        : "border-primary outline-primary"
                    }`}
                    placeholder="Enter Your Email"
                  />

                  {/* message input */}
                  <textarea
                    rows={4}
                    cols={10}
                    {...register("message")}
                    placeholder="Your Message"
                    className={`w-full rounded-xl py-3 px-6 border mt-5 ${
                      errors.message
                        ? "border-red-400 outline-red-400"
                        : "border-primary outline-primary"
                    }`}
                  ></textarea>
                  <button
                    className={`btn-primary ${isSubmitting && ""}`}
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <RiLoader3Fill fontSize={20} className="animate-spin" />
                    ) : (
                      "Submit Now"
                    )}
                  </button>
                </form>
              </div>

              <div className="w-full lg:w-1/2">
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
