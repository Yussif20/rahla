import { useTranslation } from "react-i18next";
import contactImg from "../assets/contact-img.png";
import { PhoneIncoming, Mail, MapPinPlusInside } from "lucide-react";
import React, { useState } from "react";

const contactInfo = [
  {
    icon: PhoneIncoming,
    label: "contact.phoneLabel",
    value: "+9640773481284",
  },
  {
    icon: Mail,
    label: "contact.emailLabel",
    value: "info@mail.com",
  },
  {
    icon: MapPinPlusInside,
    label: "contact.addressLabel",
    value: "العراق/ البصرة , الموفقية سنتر النخلة",
  },
];

const Contact = () => {
  const { t } = useTranslation();
  const [modalOpen, setModalOpen] = useState(false);

  // Form state
  type FormState = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };
  type ErrorState = {
    name?: string;
    email?: string;
    phone?: string;
    message?: string;
  };
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<ErrorState>({});

  // Validation
  const validate = () => {
    const errs: ErrorState = {};
    if (!form.name.trim()) errs.name = t("contact.form.nameError");
    if (!form.email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/))
      errs.email = t("contact.form.emailError");
    if (!form.phone.match(/^\+?\d{10,15}$/))
      errs.phone = t("contact.form.phoneError");
    if (!form.message.trim()) errs.message = t("contact.form.messageError");
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setModalOpen(true);
      setTimeout(() => setModalOpen(false), 2000);
      setForm({ name: "", email: "", phone: "", message: "" });
      setErrors({});
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-10 lg:px-10 py-0 w-full">
      <img
        src={contactImg}
        alt="contact"
        className="w-full h-[220px] object-cover mb-8"
      />
      {/* Contact Info Row (RTL) */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full mb-10">
        {contactInfo.map((info, idx) => {
          const Icon = info.icon;
          return (
            <React.Fragment key={idx}>
              <div className="flex flex-col items-center justify-center px-6 py-6 w-full max-w-[320px]">
                <Icon size={58} color="#06cf82" className="mb-2" />
                <span className="text-3xl text-white font-bold mb-2">
                  {t(info.label)}
                </span>
                <span className="text-gray-400 text-xl font-semibold text-center">
                  {info.value}
                </span>
              </div>
              {idx < contactInfo.length - 1 && (
                <div className="hidden sm:block h-24 w-[2px] bg-gray-500 mx-2" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      {/* Lower Half: Info and Form */}
      <div className="flex flex-col md:flex-row gap-8 w-full mt-8">
        {/* Right Half: Info */}
        <div className="flex-1 flex flex-col justify-start items-start mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-white mb-6">
            {t("contact.form.title")}
          </h2>
          <p className="text-gray-400 text-xl mb-4 leading-relaxed">
            {t("contact.form.p1")}
          </p>
          <p className="text-gray-400 text-xl leading-relaxed">
            {t("contact.form.p2")}
          </p>
        </div>
        {/* Left Half: Form */}
        <form
          className="flex-1 bg-[#3d3d3d] rounded-3xl text-white flex flex-col gap-4 p-6"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder={t("contact.form.name")}
            className="bg-[#282828] rounded-xl px-4 py-3 text-lg border border-[#b4b4b4] focus:outline-none"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          {errors.name && (
            <span className="text-red-500 text-sm">{errors.name}</span>
          )}
          <input
            type="email"
            placeholder={t("contact.form.email")}
            className="bg-[#282828] rounded-xl px-4 py-3 text-lg border border-[#b4b4b4] focus:outline-none"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          {errors.email && (
            <span className="text-red-500 text-sm">{errors.email}</span>
          )}
          <input
            type="tel"
            placeholder={t("contact.form.phone")}
            className="bg-[#282828] rounded-xl px-4 py-3 text-lg border border-[#b4b4b4] focus:outline-none text-right"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
          {errors.phone && (
            <span className="text-red-500 text-sm">{errors.phone}</span>
          )}
          <textarea
            placeholder={t("contact.form.message")}
            className="bg-[#282828] rounded-xl px-4 py-3 text-lg border border-[#b4b4b4] focus:outline-none min-h-[80px]"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
          <button
            type="submit"
            className="bg-[#06cf82] text-white font-bold rounded-[10px] px-5 py-2 text-lg mt-2 transition-colors duration-200 hover:bg-[#05b96f]"
          >
            {t("contact.form.send")}
          </button>
        </form>
      </div>
      {/* Modal */}
      {modalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/30">
          <div className="bg-white rounded-2xl shadow-lg px-8 py-6 text-center">
            <span className="text-[#06cf82] text-2xl font-bold mb-2 block">
              {t("contact.form.modalTitle")}
            </span>
            <span className="text-gray-700 text-lg">
              {t("contact.form.modalMsg")}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
export default Contact;
