import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    // Validation for name
    if (!name) {
      newErrors.name = "Ismingizni kiriting.";
    }

    // Validation for phone (Uzbekistan phone format)
    const phonePattern = /^\+998[0-9]{9}$/;
    if (!phone.match(phonePattern)) {
      newErrors.phone = "Telefon raqamingiz noto'g'ri formatda.";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});

      // Access the bot token and chat ID from environment variables
      const botToken = process.env.REACT_APP_TELEGRAM_BOT_TOKEN; // Bot token from .env
      const chatId = process.env.REACT_APP_TELEGRAM_CHAT_ID; // Chat ID from .env
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
        console.error("Error:", error);
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
        <div data-aos="fade-right" className="form-div">
          <form onSubmit={handleSubmit} className="form-container">
            <h2>Ma'lumotlaringizni qoldiring</h2>

            <div className="form-group">
              <input 
                placeholder="Ismingiz"
                type="text"
                id="name"
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
                id="phone"
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

      {/* ToastContainer is used to display the notifications */}
      <ToastContainer />
    </div>
  );
}
