import React, { FC } from "react";
import { useTranslation } from "react-i18next";
import heroImg from "../assets/hero.png";

const Hero: FC = () => {
  const { t } = useTranslation();
  return (
    <section
      className="w-full min-h-[320px] h-[400px] sm:h-[500px] flex flex-col items-center justify-center text-center relative bg-cover bg-center rounded-[24px] sm:rounded-[42px] px-2 sm:px-0"
      style={{ backgroundImage: `url(${heroImg})` }}
    >
      <div className="absolute inset-0 bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-white font-bold text-[28px] sm:text-[45px] leading-[120%]">
          {t("hero.title")}
        </h1>
        <p className="text-white mt-6 font-normal text-[20px] sm:text-[40px] leading-[120%]">
          <span
            dangerouslySetInnerHTML={{
              __html: t("hero.quote"),
            }}
          />
        </p>
        <button className="mt-8 px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-gray-300 text-black font-bold text-[18px] sm:text-[30px] leading-[120%] transition-colors duration-300 hover:bg-gray-200">
          {t("hero.button")}
        </button>
      </div>
    </section>
  );
};

export default Hero;
