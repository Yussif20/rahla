import { useTranslation } from "react-i18next";

const Reports = () => {
  const { t } = useTranslation();
  return <div className="p-8 text-white text-2xl">{t("pages.reports")}</div>;
};
export default Reports;
