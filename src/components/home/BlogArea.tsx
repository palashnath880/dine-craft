import React from "react";
import BlogItem from "../shared/BlogItem";

export default function BlogArea() {
  return (
    <div className="container-fluid blog py-6">
      <div className="container">
        <div className="text-center wow bounceInUp" data-wow-delay="0.1s">
          <small className="d-inline-block fw-bold text-dark text-uppercase bg-light border border-primary rounded-pill px-4 py-1 mb-3">
            Our Blog
          </small>
          <h1 className="display-5 mb-5">Be First Who Read News</h1>
        </div>
        <div className="row gx-4 justify-content-center">
          {[...Array(10)].map((_, index) => (
            <BlogItem key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
