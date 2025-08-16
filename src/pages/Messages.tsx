import { useTranslation } from "react-i18next";

const Messages = () => {
  const { t } = useTranslation();
  return <div className="p-8 text-white text-2xl">{t("pages.messages")}</div>;
};
export default Messages;
