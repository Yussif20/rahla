import React from "react";
import { Trophy, Handbag, Package } from "lucide-react";
import { useTranslation } from "react-i18next";

const cardData = [
  {
    label: "dashboard.profit",
    value: "124,854",
    icon: Trophy,
    iconBg: "#faa519",
  },
  {
    label: "dashboard.profit",
    value: "124,854",
    icon: Handbag,
    iconBg: "#35c170",
  },
  {
    label: "dashboard.profit",
    value: "124,854",
    icon: Package,
    iconBg: "#58c2dc",
  },
];

const DashboardProfitCards: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full mb-0 justify-center items-center">
      {cardData.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="flex flex-row-reverse justify-between items-center rounded-2xl p-4 md:p-6 w-full max-w-[400px] bg-[#3d3d3d] mx-auto"
          >
            <div className="flex flex-col items-end flex-1">
              <span className="text-white text-[15px] font-bold mb-2">
                {t(card.label)}
              </span>
              <span className="text-white text-[18px] font-bold flex items-center gap-1">
                <span className="text-white text-[15px] font-bold">
                  {t("dashboard.currency")}
                </span>
                {card.value}
              </span>
            </div>
            <div
              className={`flex items-center justify-center mr-4 rounded-[8px] w-[36px] h-[36px]`}
              style={{ background: card.iconBg }}
            >
              <Icon size={24} color="#fff" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default DashboardProfitCards;
