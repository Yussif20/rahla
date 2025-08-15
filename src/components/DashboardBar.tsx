import notificationIcon from "../assets/notification-bing.png";
import { useTranslation } from "react-i18next";

const DashboardBar: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-row items-center justify-between px-4 sm:px-6 md:px-8 lg:px-10 py-2 sm:py-3 md:py-4 mt-2 sm:mt-4 md:mt-6 max-w-full bg-[#282828] gap-2 sm:gap-4 md:gap-6 lg:gap-8">
      <div className="flex flex-row items-center gap-2 sm:gap-3 md:gap-4">
        <div className="relative ml-2 sm:ml-3 md:ml-4">
          <img
            src={notificationIcon}
            alt="notification"
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7"
          />
          <span className="absolute top-0 right-0 w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 bg-[#06cf82] rounded-full border-2 border-[#282828]" />
        </div>
        <span className="text-[#06cf82] text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-[150%]">
          {t("dashboardBar.subscription")}
        </span>
      </div>
      <span className="text-white text-sm sm:text-base md:text-lg lg:text-xl font-bold leading-[150%]">
        {t("dashboardBar.account")}
      </span>
    </div>
  );
};

export default DashboardBar;
