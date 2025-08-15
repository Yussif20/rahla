import React from "react";
import { useTranslation } from "react-i18next";

const DashboardStatsBox: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      className="bg-[#3d3d3d] py-6 sm:py-8 md:py-10 lg:py-12 rounded-2xl p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col gap-3 sm:gap-4 w-full max-w-[350px] sm:max-w-[400px] min-w-0 min-h-[300px] sm:min-h-[350px] md:min-h-[400px] mx-auto"
      dir="rtl"
    >
      <div className="flex flex-col items-center gap-1 sm:gap-2">
        <div className="text-white text-lg sm:text-xl md:text-2xl font-bold leading-[150%] text-center">
          {t("dashboard.visitors")}
        </div>
        <div className="text-[#838383] text-sm sm:text-base md:text-lg font-medium leading-[40px] text-center">
          {t("dashboard.merchants")}
        </div>
      </div>
      <div className="flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{ background: "#7c3aed" }}
            ></span>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">
              {t("dashboard.social")}
            </span>
          </div>
          <span className="text-white text-sm sm:text-base md:text-lg font-bold">
            97%
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{ background: "#06cf82" }}
            ></span>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">
              {t("dashboard.purchases")}
            </span>
          </div>
          <span className="text-white text-sm sm:text-base md:text-lg font-bold">
            85%
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{ background: "#facc15" }}
            ></span>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">
              {t("dashboard.ads")}
            </span>
          </div>
          <span className="text-white text-sm sm:text-base md:text-lg font-bold">
            40%
          </span>
        </div>
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
              style={{ background: "#fb923c" }}
            ></span>
            <span className="text-white text-sm sm:text-base md:text-lg font-medium">
              {t("dashboard.staffPromo")}
            </span>
          </div>
          <span className="text-white text-sm sm:text-base md:text-lg font-bold">
            10%
          </span>
        </div>
      </div>
    </div>
  );
};

export default DashboardStatsBox;
