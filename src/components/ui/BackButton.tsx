import React from "react";
import { FiArrowLeft } from "react-icons/fi";

type BackButtonProps = {
  onClick: () => void;
};

const BackButton = ({ onClick }: BackButtonProps) => (
  <button
    onClick={onClick}
    aria-label="Volver"
    className="
      absolute top-6 left-6 sm:hidden 
      flex items-center justify-center 
      w-12 h-12 
      bg-orange-400 bg-opacity-90 
      text-white text-3xl 
      rounded-full 
      shadow-lg 
      hover:bg-orange-500 hover:scale-110 
      transition-transform duration-200 ease-in-out
      focus:outline-none focus:ring-4 focus:ring-orange-300
    "
  >
    <FiArrowLeft />
  </button>
);

export default BackButton;
