import { useTranslation } from "react-i18next";
import contactImg from "../assets/contact-img.png";
import aboutImg from "../assets/about.png";

const About = () => {
  const { t } = useTranslation();
  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-10 py-0 w-full">
      <img
        src={contactImg}
        alt="about"
        className="w-full h-[220px] object-cover mb-16"
      />
      <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
        {/* Right Half: Info (60%) */}
        <div className="w-full md:w-[60%] flex flex-col justify-center items-start mb-8 md:mb-0">
          <h2 className="text-3xl text-white font-bold mb-2">
            {t("about.title")}
          </h2>
          <p className="text-gray-400 text-xl font-semibold text-right mb-4">
            {t("about.p")}
          </p>
          <p className="text-gray-400 text-xl font-semibold text-right mb-4">
            {t("about.p")}
          </p>
          <p className="text-gray-400 text-xl font-semibold text-right mb-4">
            {t("about.p")}
          </p>
        </div>
        {/* Left Half: Image (40%) */}
        <div className="w-full md:w-[40%] flex items-center justify-center">
          <img src={aboutImg} alt="about" className="w-full h-auto shadow-lg" />
        </div>
      </div>
    </div>
  );
};
export default About;
