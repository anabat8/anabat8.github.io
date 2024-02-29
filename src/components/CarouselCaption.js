import React from 'react';
import { FaGithub } from "react-icons/fa";

const CarouselCaption = ({ title, subtitle, technologies, link }) => {
  return (
    <div className="absolute md:right-0 p-4">
      <div className="text-navy text-xs md:text-3xl font-poppins font-semibold text-center">{title}</div>
      <div className="text-navy md:text-lg mt-2 font-poppins font-semibold">{subtitle}</div>
      <div className="text-pinkStandard md:text-lg mt-2 font-poppins font-semibold text-center">{technologies}</div>
      <div className="flex items-center justify-center mt-2">
        <a href={link}>
          <FaGithub className="text-2xl md:text-3xl" />
        </a>
      </div>
    </div>
  );
};

export default CarouselCaption;