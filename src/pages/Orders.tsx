import { useTranslation } from "react-i18next";

const Orders = () => {
  const { t } = useTranslation();
  return <div className="p-8 text-white text-2xl">{t("pages.orders")}</div>;
};
export default Orders;
