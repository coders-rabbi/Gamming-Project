import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { FaPlayCircle } from "react-icons/fa";
import "./banner.css";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="bg py-28 md:py-60">
      <div className="flex items-center gap-3 justify-center">
        <div className="w-24 h-1 bg-white"></div>
        <h1 className="text-[#E4A101] font-bold text-xl md:text-3xl">KHELO</h1>
        <div className="w-24 h-1 bg-white"></div>
      </div>

      <h2 className="text-4xl md:text-9xl text-center font-arizonia mt-4 mb-4 font-extrabold text-white">
        HUNTER <span className="text-[#E4A101] font-extrabold">KILLER</span>
      </h2>

      <p className="md:text-2xl mt-3 text-white font-semibold text-center">
        Find technology or people for digital projects in public sector and Find{" "}
        <br /> an individual specialist develope researcher.
      </p>
      <div className="flex justify-center">
        <Link
          to="https://youtu.be/jxFsKF4P4Gw?si=PK6i_ottv9iAZZRW" target="_blank"
          className="flex items-center gap-3 text-2xl font-bold px-14 py-3 rounded-tr-full rounded-bl-full bg-[#EFAC08] hover:bg-[#15171C] mt-5 text-white"
        >
          Live Match
          <FaPlayCircle className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default Banner;
