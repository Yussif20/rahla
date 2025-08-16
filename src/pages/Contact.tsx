import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
  return <div className="p-8 text-white text-2xl">{t("pages.contact")}</div>;
};
export default Contact;
