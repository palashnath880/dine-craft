import React from "react";

export default function BlogItem() {
  return (
    <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-delay="0.1s">
      <div className="blog-item">
        <div className="overflow-hidden rounded">
          <img src="img/blog-1.jpg" className="img-fluid w-100" alt="" />
        </div>
        <div className="blog-content mx-4 d-flex rounded bg-light">
          <div className="text-dark bg-primary rounded-start">
            <div className="h-100 p-3 d-flex flex-column justify-content-center text-center">
              <p className="fw-bold mb-0">16</p>
              <p className="fw-bold mb-0">Sep</p>
            </div>
          </div>
          <a href="#" className="h5 lh-base my-auto h-100 p-3">
            How to get more test in your food from
          </a>
        </div>
      </div>
    </div>
  );
}
