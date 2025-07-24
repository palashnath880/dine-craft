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

      <div
        className="container-fluid contact py-6 wow bounceInUp"
        data-wow-delay="0.1s"
      >
        <div className="container">
          <div className="row g-0">
            <div className="col-1">
              <Image
                width={300}
                height={300}
                src="/img/background-site.jpg"
                className="img-fluid h-100 w-100 rounded-start"
                style={{ objectFit: "cover", opacity: "0.7" }}
                alt=""
              />
            </div>
            <div className="col-10">
              <div className="border-bottom border-top border-primary bg-light py-5 px-4">
                <div className="text-center">
                  <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
                    Book Us
                  </small>
                  <h1 className="display-5 mb-5">
                    Where you want Our Services
                  </h1>
                </div>
                <div className="row g-4 form">
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select Country</option>
                      <option value="1">USA</option>
                      <option value="2">UK</option>
                      <option value="3">India</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select City</option>
                      <option value="1">Depend On Country</option>
                      <option value="2">UK</option>
                      <option value="3">India</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Select Palace</option>
                      <option value="1">Depend On Country</option>
                      <option value="2">UK</option>
                      <option value="3">India</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Small Event</option>
                      <option value="1">Event Type</option>
                      <option value="2">Big Event</option>
                      <option value="3">Small Event</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>No. Of Palace</option>
                      <option value="1">100-200</option>
                      <option value="2">300-400</option>
                      <option value="3">500-600</option>
                      <option value="4">700-800</option>
                      <option value="5">900-1000</option>
                      <option value="6">1000+</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <select
                      className="form-select border-primary p-2"
                      aria-label="Default select example"
                    >
                      <option selected>Vegetarian</option>
                      <option value="1">Vegetarian</option>
                      <option value="2">Non Vegetarian</option>
                    </select>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="mobile"
                      className="form-control border-primary p-2"
                      placeholder="Your Contact No."
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="date"
                      className="form-control border-primary p-2"
                      placeholder="Select Date"
                    />
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <input
                      type="email"
                      className="form-control border-primary p-2"
                      placeholder="Enter Your Email"
                    />
                  </div>
                  <div className="col-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary px-5 py-3 rounded-pill"
                    >
                      Submit Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1">
              <Image
                width={400}
                height={300}
                src="/img/background-site.jpg"
                className="img-fluid h-100 w-100 rounded-end"
                style={{ objectFit: "cover", opacity: "0.7" }}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
