"use client";

import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

export default function SearchModal() {
  // state
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <>
      <button
        className="py-3 px-3 cursor-pointer bg-primary text-secondary font-semibold rounded-full"
        onClick={() => setIsOpen(true)}
      >
        <FaSearch fontSize={18} />
        <i className="fas fa-search"></i>
      </button>

      {/* modal */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white bg-opacity-50 transition duration-300 ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      >
        <div className="w-full h-full flex flex-col">
          {/* header start */}
          <div className="border-b border-gray-400">
            <div className="py-5 container mx-auto flex justify-between">
              <h5 className="text-2xl ">Search by keyword</h5>
              <button
                type="button"
                className="opacity-80 cursor-pointer"
                onClick={() => setIsOpen(false)}
              >
                <FaXmark fontSize={28} />
              </button>
            </div>
          </div>
          {/* header end */}

          <div className="flex-1 grid place-items-center">
            <div className="w-96 flex items-center-safe border-2 border-gray-300 rounded-lg overflow-hidden">
              <input
                type="search"
                className="py-2 px-4 text-lg outline-none border-0 flex-1"
                placeholder="keywords"
              />
              <button
                className="bg-gray-300 px-4 flex items-center"
                style={{ height: "-webkit-fill-available" }}
              >
                <FaSearch />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
