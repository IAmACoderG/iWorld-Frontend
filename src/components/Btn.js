import React from "react";
import { HoverBorderGradient } from "./ui/hover-border-gradient";
import { FaHome } from "react-icons/fa";

export default function Btn() {
  return (
    <div className="flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
      >
        <FaHome/>
        <span>Home</span>
      </HoverBorderGradient>
    </div>
  );
}

