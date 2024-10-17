import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import { Sidebar } from "primereact/sidebar"; // Import PrimeReact Sidebar
import { Button } from "primereact/button"; // Optional for Sidebar buttons
import logo from "../images/logo.png";
import "primereact/resources/themes/saga-blue/theme.css";  // PrimeReact Theme
import "primereact/resources/primereact.min.css";         // Core CSS
import "primeicons/primeicons.css";                      // Icons

const { Option } = Select;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false); // Sidebar state

  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle sidebar visibility
  };

  const handleLinkClick = () => {
    setIsOpen(false); // Close sidebar on link click
  };

  return (
    <div className="nb">
      <nav className="navbar">
        <div className="container container1">
          <a href="#main">
            <img src={logo} alt={t("logoAlt")} className="navbar-logo" />
          </a>

          {/* Desktop Navbar links */}
          <div className="links-nav">
            <div className="navbar-links">
              <a href="#main" className="nav-link" onClick={handleLinkClick}>
                {t("main")}
              </a>
              <a href="#about" className="nav-link" onClick={handleLinkClick}>
                {t("about")}
              </a>
              <a href="#service" className="nav-link" onClick={handleLinkClick}>
                {t("services")}
              </a>
              <a href="#comment" className="nav-link" onClick={handleLinkClick}>
                {t("comments")}
              </a>
              <a href="#faq" className="nav-link" onClick={handleLinkClick}>
                {t("faq")}
              </a>
            </div>
          </div>

          <div className="navbar-right">
            <Select
              defaultValue={i18n.language}
              style={{ width: 120, marginLeft: "10px" }}
              onChange={handleLanguageChange}
            >
              <Option value="uz">O'zbekcha</Option>
              <Option value="ru">Русский</Option>
              <Option value="en">English</Option>
            </Select>

            {/* Sidebar (Hamburger menu) for mobile */}
            <div className="menu-icon" onClick={toggleMenu}>
              &#9776;
            </div>

            <a className="contact1" href="#contact1">
              <button className="contact-button">{t("contact")}</button>
            </a>
          </div>
        </div>

        {/* PrimeReact Sidebar for mobile menu */}
        <Sidebar visible={isOpen} onHide={toggleMenu} position="right">
          <a href="#main" className="nav-link" onClick={handleLinkClick}>
            {t("main")}
          </a>
          <a href="#about" className="nav-link" onClick={handleLinkClick}>
            {t("about")}
          </a>
          <a href="#service" className="nav-link" onClick={handleLinkClick}>
            {t("services")}
          </a>
          <a href="#comment" className="nav-link" onClick={handleLinkClick}>
            {t("comments")}
          </a>
          <a href="#faq" className="nav-link" onClick={handleLinkClick}>
            {t("faq")}
          </a>
          <a className="contact1" href="#contact1">
              <button className="contact-button">{t("contact")}</button>
            </a>
        </Sidebar>
      </nav>
    </div>
  );
}
