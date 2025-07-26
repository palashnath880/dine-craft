import PageHeader from "@/components/shared/PageHeader";
import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <>
      <PageHeader name="Booking" />

      <section className="py-16">
        <div className="container">
          <div className="flex flex-col gap-16 bg-primary/5 px-16 py-16 shadow-md rounded-2xl">
            <div className="flex flex-col items-start gap-5">
              <small
                className={`font-semibold uppercase border-2 border-primary rounded-full px-4 py-1 text-secondary`}
              >
                Book Us
              </small>
              <h1 className={`font-bold font-playball text-5xl text-secondary`}>
                Where you want Our Services
              </h1>
            </div>

            <div className="flex">
              <form className="w-3/5">
                <div className="grid grid-cols-12 gap-x-5 gap-y-7">
                  <div className="col-span-6">
                    <input
                      required
                      name="name"
                      type="text"
                      className="my-input"
                      placeholder="Your Name"
                    />
                  </div>
                  <div className="col-span-6">
                    <input
                      required
                      name="email"
                      type="email"
                      className="my-input"
                      placeholder="Your Email"
                    />
                  </div>
                  <div className="col-span-6">
                    <input
                      required
                      name="phone"
                      type="tel"
                      className="my-input"
                      placeholder="Your Phone"
                    />
                  </div>
                  <div className="col-span-6">
                    <select
                      className="my-input"
                      name="eventType"
                      required
                      value={""}
                    >
                      <option value="" disabled>
                        Event Type
                      </option>
                      <option value="Wedding">Wedding</option>
                      <option value="Cocktail">Cocktail</option>
                      <option value="Corporate">Corporate</option>
                      <option value="Buffet">Buffet</option>
                    </select>
                  </div>
                  <div className="col-span-6">
                    <input
                      required
                      name="eventDate"
                      type="date"
                      className="my-input"
                      placeholder="Event Date"
                    />
                  </div>
                  <div className="col-span-6">
                    <input
                      required
                      name="eventTime"
                      type="time"
                      className="my-input"
                      placeholder="Event Time"
                    />
                  </div>
                  <div className="col-span-6">
                    <input
                      required
                      name="noOfGuest"
                      type="number"
                      className="my-input"
                      placeholder="Number of Guests"
                    />
                  </div>
                  <div className="col-span-6">
                    <input
                      required
                      name="location"
                      type="text"
                      className="my-input"
                      placeholder="Location"
                    />
                  </div>

                  <div className="col-span-12">
                    <div className="flex flex-col gap-4 items-start">
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
                      <button className="btn-primary" type="submit">
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
