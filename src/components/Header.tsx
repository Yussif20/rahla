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
          style={{ width: "110px", height: "50px" }}
        >
          <img
            src={headerLogo}
            alt="logo"
            className="object-contain w-full h-full
              max-w-[110px] max-h-[50px]
              md:max-w-[80px] md:max-h-[36px]
              sm:max-w-[65px] sm:max-h-[28px]
              lg:max-w-[140px] lg:max-h-[65px]
              xl:max-w-[170px] xl:max-h-[85px]"
          />
        </Link>
        {/* Desktop nav links */}
        <nav className="hidden sm:flex flex-1 items-center justify-center gap-4 flex-wrap mx-3 md:mx-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.key}
              to={link.to}
              className={({ isActive }) =>
                `nav-link mx-3 md:mx-1 text-white text-[18px] md:text-[14px] sm:text-[13px] lg:text-[22px] pb-2 transition-colors duration-200 relative${
                  isActive ? " active" : ""
                }`
              }
            >
              <span className="relative inline-block text-[18px] md:text-[14px] sm:text-[13px] lg:text-[24px] font-extrabold leading-[150%]">
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
            className="text-white px-4 md:px-3 sm:px-2 lg:px-6 py-2 md:py-1 sm:py-1 lg:py-3 flex items-center gap-2 transition-transform duration-200 hover:scale-105 text-[18px] md:text-[14px] sm:text-[13px] lg:text-[22px] font-extrabold"
            style={{
              background: "linear-gradient(90deg, #00df6d 0%, #126545 100%)",
              borderRadius: "58px",
              fontSize: "18px",
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
