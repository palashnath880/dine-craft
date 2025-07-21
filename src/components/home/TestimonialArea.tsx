import React from "react";

export default function TestimonialArea() {
  return (
    <div className="container-fluid py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Testimonial
          </small>
          <h1 className="display-5 mb-5">What Our Customers says!</h1>
        </div>
        <div
          className="owl-carousel owl-theme testimonial-carousel testimonial-carousel-1 mb-4 wow bounceInUp"
          data-wow-delay="0.1s"
        >
          {[...Array(10)].map((_, index) => (
            <div className="testimonial-item rounded bg-light" key={index}>
              <div className="d-flex mb-3">
                <img
                  src="img/testimonial-1.jpg"
                  className="img-fluid rounded-circle flex-shrink-0"
                  alt=""
                />
                <div
                  className="position-absolute"
                  style={{ top: "15px", right: "20px" }}
                >
                  <i className="fa fa-quote-right fa-2x"></i>
                </div>
                <div className="ps-3 my-auto">
                  <h4 className="mb-0">Person Name</h4>
                  <p className="m-0">Profession</p>
                </div>
              </div>
              <div className="testimonial-content">
                <div className="d-flex">
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                  <i className="fas fa-star text-primary"></i>
                </div>
                <p className="fs-5 m-0 pt-3">
                  Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut
                  labore et dolore magna aliqua.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
