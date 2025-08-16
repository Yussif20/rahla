import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { useTranslation } from "react-i18next";

import Sidebar from "../components/Sidebar";
import Inventory from "./Inventory";
import Orders from "./Orders";
import Reports from "./Reports";
import Messages from "./Messages";
import Categories from "./Categories";
import DashboardBar from "../components/DashboardBar";
import DashboardStatsBox from "../components/DashboardStatsBox";
import DashboardProfitCards from "../components/DashboardProfitCards";
import DashboardChartBox from "../components/DashboardChartBox";
import DashboardOrders from "../components/DashboardOrders";

const Dashboard: React.FC = () => {
  const { t } = useTranslation();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#313131]">
      {/* Sidebar: always fixed to right on large screens (lg) */}
      <div className="hidden lg:block fixed top-0 right-0 h-screen w-[200px] z-30">
        <Sidebar />
      </div>
      {/* Sidebar: sliding overlay for mobile and medium screens (sm, md) */}
      <div
        className={`fixed top-0 right-0 w-[200px] h-screen bg-white z-50 shadow-lg flex lg:hidden transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ borderTopLeftRadius: 50, borderBottomLeftRadius: 50 }}
      >
        <Sidebar />
      </div>
      {/* Toggle button for mobile and medium screens (sm, md) */}
      <button
        className={`lg:hidden fixed right-2 top-1/2 -translate-y-1/2 bg-[#06cf82] rounded-full p-2 z-60 shadow-lg flex items-center justify-center transition-transform duration-300 ${
          sidebarOpen ? "rotate-180" : "rotate-0"
        }`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label={
          sidebarOpen ? t("dashboard.closeSidebar") : t("dashboard.openSidebar")
        }
      >
        <ArrowLeft color="#fff" size={28} />
      </button>
      {/* Main content: full width on sm/md, offset on lg with smaller left padding for md+ */}
      <div className="flex-1 flex flex-col w-full pr-0 lg:pr-[220px] md:pl-2 lg:pl-4">
        <DashboardBar />
        <Routes>
          <Route
            index
            element={
              <>
                <div
                  className="flex flex-col md:flex-row w-full pt-8 gap-8 items-stretch"
                  style={{ minHeight: "400px" }}
                >
                  {/* Left stats box: stretched to match right side height */}
                  <div className="w-full md:w-1/4 min-w-[260px] max-w-[320px] mb-6 md:mb-0 flex h-full">
                    <div className="flex-1 flex flex-col h-full">
                      <DashboardStatsBox />
                    </div>
                  </div>
                  {/* Right side: profit cards and chart box stacked */}
                  <div className="flex flex-col flex-1 gap-4 h-full w-full md:w-3/4">
                    <DashboardProfitCards />
                    <DashboardChartBox />
                  </div>
                </div>
                <DashboardOrders />
              </>
            }
          />
          <Route path="inventory" element={<Inventory />} />
          <Route path="orders" element={<Orders />} />
          <Route path="reports" element={<Reports />} />
          <Route path="messages" element={<Messages />} />
          <Route path="categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
