import { useTranslation } from "react-i18next";

const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <div className="p-8 text-white text-2xl">{t("pages.testimonials")}</div>
  );
};
export default Testimonials;
