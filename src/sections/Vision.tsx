import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import visionIcon from "../assets/vision.png";

const Vision: FC = () => {
  const { t } = useTranslation();
  return (
    <section className="w-full flex justify-center py-8 sm:py-12 px-2 sm:px-8">
      <div className="bg-[#3d3d3d] rounded-[12px] sm:rounded-[20px] py-6 sm:py-10 px-2 sm:px-4 flex flex-col items-center w-full max-w-full">
        <img
          src={visionIcon}
          alt="vision"
          className="w-[64px] h-[64px] sm:w-[98px] sm:h-[98px] mb-4 sm:mb-6 mx-auto"
        />
        <h2 className="text-white text-[24px] sm:text-[40px] font-bold leading-[150%] text-center mb-4 sm:mb-6">
          {t("vision.title")}
        </h2>
        <p className="text-white text-[16px] sm:text-[22px] font-bold leading-[150%] text-center">
          {t("vision.description.1")}
          <br />
          {t("vision.description.2")}
        </p>
      </div>
    </section>
  );
};

export default Vision;
