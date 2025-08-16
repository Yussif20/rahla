import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const weekDays = [
  "dashboardChartBox.weekdays.sunday",
  "dashboardChartBox.weekdays.monday",
  "dashboardChartBox.weekdays.tuesday",
  "dashboardChartBox.weekdays.wednesday",
  "dashboardChartBox.weekdays.thursday",
  "dashboardChartBox.weekdays.friday",
  "dashboardChartBox.weekdays.saturday",
];

const monthWeeks = [
  "dashboardChartBox.monthWeeks.1",
  "dashboardChartBox.monthWeeks.2",
  "dashboardChartBox.monthWeeks.3",
  "dashboardChartBox.monthWeeks.4",
];

const months = [
  "dashboardChartBox.months.jan",
  "dashboardChartBox.months.feb",
  "dashboardChartBox.months.mar",
  "dashboardChartBox.months.apr",
  "dashboardChartBox.months.may",
  "dashboardChartBox.months.jun",
  "dashboardChartBox.months.jul",
  "dashboardChartBox.months.aug",
  "dashboardChartBox.months.sep",
  "dashboardChartBox.months.oct",
  "dashboardChartBox.months.nov",
  "dashboardChartBox.months.dec",
];

const chartOptions = [
  { key: "week", label: "dashboardChartBox.options.week" },
  { key: "month", label: "dashboardChartBox.options.month" },
  { key: "year", label: "dashboardChartBox.options.year" },
];

const chartDataSets = {
  week: [120, 300, 200, 400, 350, 500, 250],
  month: [400, 350, 500, 250],
  year: [120, 300, 200, 400, 350, 500, 250, 400, 350, 500, 250, 300],
};

const DashboardChartBox = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState("week");
  const chartData = chartDataSets[selected];
  let xLabels: string[] = [];
  if (selected === "week") xLabels = weekDays.map((key) => t(key));
  else if (selected === "month") xLabels = monthWeeks.map((key) => t(key));
  else if (selected === "year") xLabels = months.map((key) => t(key));

  return (
    <div className="w-full flex flex-col gap-3 sm:gap-4 md:gap-6" dir="rtl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-3">
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mt-3 sm:mt-4">
          {t("dashboardChartBox.title")}
        </h2>
        <div></div>
      </div>
      {/* Chart Box */}
      <div>
        <div className="md:hidden bg-[#3d3d3d] rounded-2xl p-4 sm:p-5 md:p-6 w-full min-h-[100px] sm:min-h-[120px] flex items-center justify-center">
          <span className="text-white text-sm sm:text-base md:text-lg font-bold text-center">
            {t("dashboardChartBox.mobileMessage")}
          </span>
        </div>
        <div className="hidden md:block">
          <div className="bg-[#3d3d3d] rounded-2xl p-4 sm:p-5 md:p-6 w-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px] flex flex-col relative">
            {/* Top right: green dot and label */}
            <div className="absolute top-4 sm:top-5 md:top-6 right-4 sm:right-5 md:right-6 flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full"
                style={{ background: "#06cf82" }}
              ></span>
              <span className="text-white text-sm sm:text-base md:text-lg font-[400] leading-[24px]">
                {t("dashboardChartBox.revenue")}
              </span>
            </div>
            {/* Select at top left for RTL */}
            <div className="absolute top-4 sm:top-5 md:top-6 left-4 sm:left-5 md:left-6">
              <select
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                className="bg-[#3d3d3d] text-white rounded-lg px-3 sm:px-4 py-1.5 sm:py-2 text-sm sm:text-base md:text-lg font-bold outline-none border-2 border-[#dcdcdc]"
                dir="rtl"
              >
                {chartOptions.map((opt) => (
                  <option key={opt.key} value={opt.key}>
                    {t(opt.label)}
                  </option>
                ))}
              </select>
            </div>
            {/* Chart Area */}
            <div className="flex flex-row-reverse items-end h-[160px] sm:h-[180px] md:h-[200px] w-full mt-12 sm:mt-14 md:mt-16 mb-6 sm:mb-8 pr-10 sm:pr-12 md:pr-14 pl-10 sm:pl-12 md:pl-14 relative overflow-x-auto">
              {/* Y Axis numbers */}
              <div className="absolute left-0 top-0 flex flex-col justify-between h-full text-[#9e9e9e] text-xs sm:text-sm md:text-base font-bold">
                {[500, 400, 300, 200, 100, 0].map((y, i) => (
                  <div key={y} style={{ height: i === 0 ? "0px" : "20% " }}>
                    {y}
                  </div>
                ))}
              </div>
              {/* X Axis line */}
              <div className="absolute left-8 sm:left-10 right-4 bottom-[25px] border-b-2 border-[#dcdcdc] z-10"></div>
              {/* Chart Bars */}
              <div className="flex flex-1 items-end justify-between w-full h-full">
                {chartData.map((val, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center justify-end h-full"
                    style={{ minWidth: "30px", flex: "1 1 0" }}
                  >
                    <div
                      className="bg-[#06cf82]"
                      style={{
                        height: `${(val / 500) * 80}%`,
                        borderRadius: "27.5px",
                        width: "12px",
                        transition: "height 0.4s",
                      }}
                    ></div>
                    <span className="mt-2 text-white text-xs sm:text-sm md:text-base font-bold">
                      {xLabels[i]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardChartBox;
