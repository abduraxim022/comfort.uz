import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useTranslation } from "react-i18next";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const { t } = useTranslation();

  // Form validation and Telegram submission logic
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!name) {
      newErrors.name = "Ismingizni kiriting.";
    }
    const phonePattern = /^\+998[0-9]{9}$/;
    if (!phone.match(phonePattern)) {
      newErrors.phone = "Telefon raqamingiz noto'g'ri formatda.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN;
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID;
      const message = `Ismingiz: ${name}%0ATelefon raqamingiz: ${phone}`;
      const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${message}`;

      try {
        const response = await fetch(url);
        if (response.ok) {
          toast.success("Ma'lumotlaringiz yuborildi!", {
            position: "top-right",
          });
          setName("");
          setPhone("");
        } else {
          toast.error("Xato yuz berdi, qayta urinib ko'ring.", {
            position: "top-right",
          });
        }
      } catch (error) {
        toast.error("Xato yuz berdi, qayta urinib ko'ring.", {
          position: "top-right",
        });
      }
    }
  };

  return (
    <div id="contact1" className="container">
      <div className="contact-info">
        <div className="contact-img"></div>
        <div className="form-div">
          <form onSubmit={handleSubmit} className="form-container">
            <h2>{t("leave_your_information")}</h2>

            <div className="form-group">
              <input
                placeholder={t("name")}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <input
                type="text"
                placeholder="+998-90-123-45-67"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              {errors.phone && (
                <span className="error-message">{errors.phone}</span>
              )}
            </div>

            <button type="submit" className="submit-btn">
              Yuborish
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
