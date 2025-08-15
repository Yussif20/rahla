import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import {
  House,
  Package,
  ArrowLeftRight,
  SquareActivity,
  MessageSquareText,
  Grid2x2,
} from "lucide-react";
import logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";

const Sidebar: React.FC = () => {
  const { t } = useTranslation();
  const sidebarItems = [
    { to: "/dashboard", icon: House, label: t("sidebar.home") },
    {
      to: "/dashboard/inventory",
      icon: Package,
      label: t("sidebar.inventory"),
    },
    {
      to: "/dashboard/orders",
      icon: ArrowLeftRight,
      label: t("sidebar.orders"),
    },
    {
      to: "/dashboard/reports",
      icon: SquareActivity,
      label: t("sidebar.reports"),
    },
    {
      to: "/dashboard/messages",
      icon: MessageSquareText,
      label: t("sidebar.messages"),
    },
    {
      to: "/dashboard/categories",
      icon: Grid2x2,
      label: t("sidebar.categories"),
    },
  ];

  // Sidebar toggle state for mobile
  const [open, setOpen] = useState(true); // Sidebar is open by default on mobile

  const handleToggleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Overlay for mobile sidebar */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/30 md:hidden"
          onClick={handleToggleClose}
        />
      )}
      {/* Sidebar itself */}
      <aside
        className={`${
          open ? "flex" : "hidden"
        } md:flex w-[200px] min-h-screen p-2 md:pl-4 md:pt-16 md:pb-4 md:pr-0 flex-col items-center pt-8 fixed md:static top-0 right-0 z-50 bg-gradient-to-br from-[#126545] to-[#00df6f]`}
        style={{
          borderTopLeftRadius: 50,
          borderBottomLeftRadius: 50,
        }}
      >
        <div className="flex items-center justify-center mb-8">
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <img src={logo} alt="Logo" className="w-[92px] h-[92px]" />
          </NavLink>
        </div>
        <nav className="w-full flex flex-col items-center">
          {sidebarItems.map((item, idx) => {
            const navProps = item.to === "/dashboard" ? { end: true } : {};
            return (
              <NavLink
                key={idx}
                to={item.to}
                {...navProps}
                style={{ textDecoration: "none" }}
                className={({ isActive }) =>
                  [
                    "group flex flex-col items-center justify-center mb-2 py-2 px-2 w-[50%] rounded-[16px] transition-all duration-200",
                    "text-white text-[18px] font-bold leading-[150%]",
                    isActive ? "bg-white" : "hover:bg-white",
                  ].join(" ")
                }
              >
                {({ isActive }) => (
                  <>
                    <item.icon
                      size={32}
                      className={
                        isActive
                          ? "mb-1 text-[#00df6f]"
                          : "mb-1 text-white group-hover:text-[#00df6f]"
                      }
                    />
                    <span
                      className={
                        isActive
                          ? "text-[#00df6f]"
                          : "text-white group-hover:text-[#00df6f]"
                      }
                    >
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
