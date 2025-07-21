import React from "react";

export default function EventsArea() {
  return (
    <div className="container-fluid event py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Latest Events
          </small>
          <h1 className="display-5 mb-5">
            Our Social & Professional Events Gallery
          </h1>
        </div>
        <div className="tab-class text-center">
          <ul
            className="nav nav-pills d-inline-flex justify-content-center mb-5 wow bounceInUp"
            data-wow-delay="0.1s"
          >
            <li className="nav-item p-2">
              <a
                className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill active"
                data-bs-toggle="pill"
                href="#tab-1"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  All Events
                </span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className="d-flex py-2 mx-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-2"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Wedding
                </span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-3"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Corporate
                </span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-4"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Cocktail
                </span>
              </a>
            </li>
            <li className="nav-item p-2">
              <a
                className="d-flex mx-2 py-2 border border-primary bg-light rounded-pill"
                data-bs-toggle="pill"
                href="#tab-5"
              >
                <span className="text-dark" style={{ width: "150px" }}>
                  Buffet
                </span>
              </a>
            </li>
          </ul>

          <div className="tab-content">
            {[...Array(5)].map((_, tabIndex) => (
              <div
                key={tabIndex}
                id={`tab-${tabIndex}`}
                className="tab-pane fade show p-0 active"
              >
                <div className="row g-4">
                  <div className="col-lg-12">
                    <div className="row g-4">
                      {[...Array(5)].map((_, index) => (
                        <div
                          className="col-md-6 col-lg-3 wow bounceInUp"
                          data-wow-delay="0.1s"
                          key={index}
                        >
                          <div className="event-img position-relative">
                            <img
                              className="img-fluid rounded w-100"
                              src="img/event-1.jpg"
                              alt=""
                            />
                            <div className="event-overlay d-flex flex-column p-4">
                              <h4 className="me-auto">Wedding</h4>
                              <a
                                href="img/event-1.jpg"
                                data-lightbox="event-1"
                                className="my-auto"
                              >
                                <i className="fas fa-search-plus text-dark fa-2x"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
