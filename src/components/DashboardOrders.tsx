import React, { useState } from "react";
import { Eye, Instagram } from "lucide-react";
import facebookImg from "../assets/facebook.png";
import { useTranslation } from "react-i18next";

const tabs = [
  { key: "all", label: "dashboard.tabs.all" },
  { key: "facebook", label: "dashboard.tabs.facebook" },
  { key: "instagram", label: "dashboard.tabs.instagram" },
  { key: "most", label: "dashboard.tabs.most" },
];

const orders = Array(8)
  .fill(null)
  .map((_, idx) => ({
    product: "dashboardOrders.productName",
    customer: "dashboardOrders.customerName",
    address: "dashboardOrders.address",
    status:
      idx % 2 === 0
        ? "dashboardOrders.status.shipping"
        : "dashboardOrders.status.preparing",
    platform: idx % 2 === 0 ? "facebook" : "instagram",
  }));

const DashboardOrders: React.FC = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("all");
  const [modalOrder, setModalOrder] = useState<null | (typeof orders)[0]>(null);

  // Filtering logic
  let filteredOrders = orders;
  if (activeTab === "facebook") {
    filteredOrders = orders.filter((o) => o.platform === "facebook");
  } else if (activeTab === "instagram") {
    filteredOrders = orders.filter((o) => o.platform === "instagram");
  } else if (activeTab === "most") {
    // Example: most requested products (simulate by showing first 3)
    filteredOrders = orders.slice(0, 3);
  }

  return (
    <div className="w-full mt-8 md:mt-12 overflow-x-auto" dir="rtl">
      {/* Modal */}
      {modalOrder && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-white/10"
          onClick={() => setModalOrder(null)}
        >
          <div
            className="bg-[#3d3d3d] rounded-2xl p-4 md:p-8 min-w-[200px] md:min-w-[320px] max-w-[95vw] text-white relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 left-2 text-white text-xl px-2 py-1 rounded hover:bg-[#222]"
              onClick={() => setModalOrder(null)}
            >
              ×
            </button>
            <h2 className="text-[22px] font-bold mb-4">
              {t("dashboardOrders.modal.title")}
            </h2>
            <div className="mb-2">
              <b>{t("dashboardOrders.modal.product")}:</b>{" "}
              {t(modalOrder.product)}
            </div>
            <div className="mb-2">
              <b>{t("dashboardOrders.modal.customer")}:</b>{" "}
              {t(modalOrder.customer)}
            </div>
            <div className="mb-2">
              <b>{t("dashboardOrders.modal.address")}:</b>{" "}
              {t(modalOrder.address)}
            </div>
            <div className="mb-2">
              <b>{t("dashboardOrders.modal.status")}:</b> {t(modalOrder.status)}
            </div>
            <div className="mb-2">
              <b>{t("dashboardOrders.modal.platform")}:</b>{" "}
              {modalOrder.platform === "facebook"
                ? t("dashboardOrders.platform.facebook")
                : t("dashboardOrders.platform.instagram")}
            </div>
          </div>
        </div>
      )}
      {/* Tabs */}
      <div className="flex flex-wrap gap-1 md:gap-2 mb-2 md:mb-4 flex-row-reverse px-1 md:px-2 justify-center md:justify-end text-[13px] md:text-[18px]">
        {[...tabs].reverse().map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`min-w-[90px] md:min-w-[120px] px-2 md:px-6 py-1 md:py-2 rounded-2xl text-[13px] md:text-[18px] font-normal leading-[150%] transition-colors duration-200 whitespace-nowrap shadow-sm border border-[#3d3d3d] ${
              activeTab === tab.key
                ? "bg-[#96FFCA] text-black border-[#96FFCA]"
                : "bg-[#3d3d3d] text-[#9e9e9e] border-[#3d3d3d]"
            }`}
            style={{ fontWeight: 400 }}
          >
            {t(tab.label)}
          </button>
        ))}
      </div>
      {/* Orders Table */}
      <div className="bg-[#3d3d3d] rounded-2xl px-1 pt-2 pb-2 md:pb-4 w-full mx-auto flex flex-col items-center">
        {/* Headline Row */}
        <div className="grid grid-cols-6 gap-2 md:gap-4 pb-2 md:pb-4 border-b border-[#444] text-right w-full justify-items-center">
          <span className="text-white text-[11px] md:text-[16px] font-bold">
            {t("dashboardOrders.table.product")}
          </span>
          <span className="text-white text-[11px] md:text-[16px] font-bold">
            {t("dashboardOrders.table.customer")}
          </span>
          <span className="text-white text-[11px] md:text-[16px] font-bold">
            {t("dashboardOrders.table.address")}
          </span>
          <span className="text-white text-[11px] md:text-[16px] font-bold">
            {t("dashboardOrders.table.status")}
          </span>
          <span className="text-white text-[11px] md:text-[16px] font-bold">
            {t("dashboardOrders.table.platform")}
          </span>
          <span className="text-white text-[11px] md:text-[16px] font-bold">
            {t("dashboardOrders.table.actions")}
          </span>
        </div>
        {/* Order Rows */}
        {filteredOrders.map((order, idx) => (
          <div
            key={idx}
            className="grid grid-cols-6 gap-2 md:gap-4 py-2 md:py-3 items-center text-[11px] md:text-[16px] font-normal leading-[150%] text-white text-right w-full justify-items-center"
          >
            <span>{t(order.product)}</span>
            <span>{t(order.customer)}</span>
            <span>{t(order.address)}</span>
            <span className="flex items-center gap-1 md:gap-2">
              {order.status === "dashboardOrders.status.shipping" ? (
                <span
                  className="px-2 md:px-4 py-0.5 md:py-1 rounded-full border border-[#9ecc52] text-[#9ecc52] text-[11px] md:text-[16px] font-normal"
                  style={{ minWidth: "60px", justifyContent: "center" }}
                >
                  {t(order.status)}
                </span>
              ) : (
                <span
                  className="px-2 md:px-4 py-0.5 md:py-1 rounded-full border border-[#ac951b] text-[#ac951b] text-[11px] md:text-[16px] font-normal"
                  style={{ minWidth: "60px", justifyContent: "center" }}
                >
                  {t(order.status)}
                </span>
              )}
            </span>
            <span className="flex flex-col items-center justify-center">
              <span className="flex items-center gap-1 md:gap-2 justify-center">
                <span
                  className="flex items-center justify-center"
                  style={{ width: "16px", height: "16px" }}
                >
                  {order.platform === "facebook" ? (
                    <img
                      src={facebookImg}
                      alt="facebook"
                      className="w-4 h-4 md:w-5 md:h-5"
                    />
                  ) : (
                    <Instagram
                      size={12}
                      className="text-white md:text-[16px]"
                    />
                  )}
                </span>
                <span>
                  {order.platform === "facebook"
                    ? t("dashboardOrders.platform.facebook")
                    : t("dashboardOrders.platform.instagram")}
                </span>
              </span>
            </span>
            <span className="flex items-center gap-1 md:gap-2">
              <button
                onClick={() => setModalOrder(order)}
                className="focus:outline-none"
              >
                <Eye size={14} className="text-[#06cf82] md:text-[18px]" />
              </button>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardOrders;
