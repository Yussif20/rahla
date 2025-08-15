import React, { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import headerLogo from "../assets/header-logo.png";
import { User } from "lucide-react";
import BurgerMenu from "./BurgerMenu";

const navLinks = [
  { to: "/", key: "header.home" },
  { to: "/contact", key: "header.contact" },
  { to: "/testimonials", key: "header.testimonials" },
  { to: "/about", key: "header.about" },
];

const Header: FC = () => {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header
      className="bg-[#313131] px-4 sm:px-8 py-3 md:py-2 mb-8 sm:mb-16 flex items-center w-full flex-row relative"
      dir="rtl"
    >
      {/* Responsive header row: desktop (logo, nav, button), mobile (logo, button, burger) */}
      <div className="flex items-center w-full justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          style={{ width: "90px", height: "42px" }}
        >
          <img
            src={headerLogo}
            alt="logo"
            className="object-contain w-full h-full max-w-[90px] max-h-[42px] md:max-w-[110px] md:max-h-[52px] sm:max-w-[155px] sm:max-h-[72px]"
          />
        </Link>
        {/* Desktop nav links */}
        <nav className="hidden sm:flex flex-1 items-center justify-center flex-wrap mx-2 md:mx-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                `nav-link mx-2 md:mx-1 text-white text-[15px] md:text-[13px] sm:text-lg pb-2 transition-colors duration-200 relative${
                  isActive ? " active" : ""
                }`
              }
            >
              <span className="relative inline-block text-[15px] md:text-[13px] sm:text-[18px] font-extrabold leading-[150%]">
                {t(link.key)}
                <span className="nav-underline"></span>
              </span>
            </NavLink>
          ))}
        </nav>
        {/* Login button and burger menu */}
        <div className="flex items-center gap-2">
          <NavLink
            to="/dashboard"
            className="text-white px-3 md:px-2 sm:px-6 py-1 md:py-1 sm:py-2 flex items-center gap-2 transition-transform duration-200 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, #00df6d 0%, #126545 100%)",
              borderRadius: "58px",
              fontSize: "15px",
              fontWeight: 800,
            }}
          >
            <User size={18} />
            {t("header.login")}
          </NavLink>
          <div className="sm:hidden">
            <BurgerMenu
              open={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            />
          </div>
        </div>
      </div>
      {/* Mobile nav dropdown */}
      {/* Mobile nav dropdown */}
      {menuOpen && (
        <nav className="absolute top-full right-0 w-full bg-[#313131] flex flex-col items-center py-4 z-50 sm:hidden">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                `nav-link w-full text-center py-2 text-white text-lg transition-colors duration-200${
                  isActive ? " active" : ""
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              <span className="relative inline-block text-[18px] font-extrabold leading-[150%]">
                {t(link.key)}
                <span className="nav-underline"></span>
              </span>
            </NavLink>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
