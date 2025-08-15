import React, { FC } from "react";

interface BurgerMenuProps {
  open: boolean;
  onClick: () => void;
}

const BurgerMenu: FC<BurgerMenuProps> = ({ open, onClick }) => (
  <button
    className="sm:hidden flex flex-col justify-center items-center w-10 h-10 p-2 focus:outline-none"
    aria-label="Toggle navigation"
    onClick={onClick}
  >
    <span
      className={`block w-7 h-1 bg-white rounded transition-all duration-300 mb-1 ${
        open ? "rotate-45 translate-y-2" : ""
      }`}
    ></span>
    <span
      className={`block w-7 h-1 bg-white rounded transition-all duration-300 mb-1 ${
        open ? "opacity-0" : ""
      }`}
    ></span>
    <span
      className={`block w-7 h-1 bg-white rounded transition-all duration-300 ${
        open ? "-rotate-45 -translate-y-2" : ""
      }`}
    ></span>
  </button>
);

export default BurgerMenu;
