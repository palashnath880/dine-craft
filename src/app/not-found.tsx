import Link from "next/link";
import React from "react";

export default function notFound() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="container">
        <div className="flex justify-center">
          <div className="w-[500px] text-center flex flex-col gap-3 items-center">
            <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
            <h1 className="text-8xl font-playball">404</h1>
            <h1 className="text-5xl font-playball">Page Not Found</h1>
            <p className="mb-6 text-gray-500">
              We’re sorry, the page you have looked for does not exist in our
              website! Maybe go to our home page or try to use a search?
            </p>
            <Link className="btn-primary" href="/">
              Go Back To Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
