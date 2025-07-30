"use client";

import { Input, SelectInput } from "@/components/shared/CustomInputs";
import PageHeader from "@/components/shared/PageHeader";
import { BookingForm, bookingFormSchema } from "@/schemas/booking.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm } from "react-hook-form";

export default function Page() {
  // react hook form
  const { control, handleSubmit } = useForm<BookingForm>({
    resolver: zodResolver(bookingFormSchema),
  });

  // submit handler
  const onSubmit = async (data: BookingForm) => {
    console.log(`submitted data`, data);
  };

  return (
    <>
      <PageHeader name="Booking" bgImg="/img/booking-bg.webp" />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-16 bg-primary/5 max-md:px-5 px-16 py-16 shadow-md rounded-2xl">
            <div className="flex flex-col items-start gap-5">
              <small
                className={`font-semibold uppercase border-2 border-primary rounded-full px-4 py-1 text-secondary`}
              >
                Book Us
              </small>
              <h1
                className={`font-bold font-playball max-md:text-3xl text-5xl text-secondary`}
              >
                Where you want Our Services
              </h1>
            </div>

            <div className="flex">
              <form
                className="w-full md:w-3/5"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="grid grid-cols-12 gap-x-5 gap-y-5 sm:gap-y-7">
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="text"
                      name="name"
                      control={control}
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="text"
                      name="email"
                      control={control}
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="text"
                      name="phone"
                      control={control}
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <SelectInput
                      name="eventType"
                      control={control}
                      placeholder="Select Event Type"
                      options={[
                        {
                          label: "Wedding",
                          value: "Wedding",
                        },
                        {
                          label: "Cocktail",
                          value: "Cocktail",
                        },
                        {
                          label: "Corporate",
                          value: "Corporate",
                        },
                        {
                          label: "Buffet",
                          value: "Buffet",
                        },
                      ]}
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="date"
                      name="eventDate"
                      control={control}
                      placeholder="Event Date"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="time"
                      name="eventTime"
                      control={control}
                      placeholder="Event Time"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="number"
                      name="noOfGuest"
                      control={control}
                      placeholder="Number of Guests"
                    />
                  </div>
                  <div className="col-span-full sm:col-span-6">
                    <Input
                      type="text"
                      name="location"
                      control={control}
                      placeholder="Event Location"
                    />
                  </div>

                  <div className="col-span-12">
                    <div className="flex flex-col gap-4 max-md:gap-7 items-start">
                      <div className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          id="terms&condition"
                          className="w-5 h-5 cursor-pointer"
                        />
                        <label
                          htmlFor="terms&condition"
                          className="cursor-pointer"
                        >
                          Agree to Terms & Conditions
                        </label>
                      </div>
                      <button
                        className="btn-primary max-sm:!w-full"
                        type="submit"
                      >
                        Book Catering Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
