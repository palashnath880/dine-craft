import React from "react";

export default function Header() {
  return (
    <div className="container-fluid nav-bar">
      <div className="container">
        <nav className="navbar navbar-light navbar-expand-lg py-4">
          <a href="index.html" className="navbar-brand">
            <h1 className="text-primary fw-bold mb-0">
              Cater<span className="text-dark">Serv</span>
            </h1>
          </a>
          <button
            className="navbar-toggler py-2 px-3"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarCollapse"
          >
            <span className="fa fa-bars text-primary"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto">
              <a href="index.html" className="nav-item nav-link active">
                Home
              </a>
              <a href="about.html" className="nav-item nav-link">
                About
              </a>
              <a href="service.html" className="nav-item nav-link">
                Services
              </a>
              <a href="event.html" className="nav-item nav-link">
                Events
              </a>
              <a href="menu.html" className="nav-item nav-link">
                Menu
              </a>
              <div className="nav-item dropdown">
                <a
                  href="#"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                >
                  Pages
                </a>
                <div className="dropdown-menu bg-light">
                  <a href="book.html" className="dropdown-item">
                    Booking
                  </a>
                  <a href="blog.html" className="dropdown-item">
                    Our Blog
                  </a>
                  <a href="team.html" className="dropdown-item">
                    Our Team
                  </a>
                  <a href="testimonial.html" className="dropdown-item">
                    Testimonial
                  </a>
                  <a href="404.html" className="dropdown-item">
                    404 Page
                  </a>
                </div>
              </div>
              <a href="contact.html" className="nav-item nav-link">
                Contact
              </a>
            </div>
            <button
              className="btn-search btn btn-primary btn-md-square me-4 rounded-circle d-none d-lg-inline-flex"
              data-bs-toggle="modal"
              data-bs-target="#searchModal"
            >
              <i className="fas fa-search"></i>
            </button>
            <a
              href=""
              className="btn btn-primary py-2 px-4 d-none d-xl-inline-block rounded-pill"
            >
              Book Now
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
}
