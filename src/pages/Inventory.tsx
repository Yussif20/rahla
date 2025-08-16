import { useTranslation } from "react-i18next";

const Inventory = () => {
  const { t } = useTranslation();
  return <div className="p-8 text-white text-2xl">{t("pages.inventory")}</div>;
};
export default Inventory;
