import { useTranslation } from "react-i18next";

const Categories = () => {
  const { t } = useTranslation();
  return <div className="p-8 text-white text-2xl">{t("pages.categories")}</div>;
};
export default Categories;
