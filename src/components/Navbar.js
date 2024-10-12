import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Select } from "antd";
import logo from "../images/logo.png";

const { Option } = Select;

export default function Navbar() {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  // Language switch handler
  const handleLanguageChange = (value) => {
    i18n.changeLanguage(value);
  };

  // Toggle dropdown menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close dropdown and navigate to section
  const handleLinkClick = () => {
    setIsOpen(false); // Close dropdown on link click
  };

  return (
    <div className="nb">
      <nav className="navbar">
        <div className="container container1">
          <a href="#main">
            <img src={logo} alt={t('logoAlt')} className="navbar-logo" />
          </a>

          {/* Navbar links */}
          <div className="links-nav">
            <div className={`navbar-links ${isOpen ? 'open' : ''}`}>
              <a href="#main" className="nav-link" onClick={handleLinkClick}>{t('main')}</a>
              <a href="#about" className="nav-link" onClick={handleLinkClick}>{t('about')}</a>
              <a href="#service" className="nav-link" onClick={handleLinkClick}>{t('services')}</a>
              <a href="#comment" className="nav-link" onClick={handleLinkClick}>{t('comments')}</a>
              <a href="#faq" className="nav-link" onClick={handleLinkClick}>{t('faq')}</a>
            </div>
          </div>

          {/* Language selector and contact button */}
          <div className="navbar-right">
            <Select
              defaultValue={i18n.language}
              style={{ width: 120, marginLeft: '10px' }}
              onChange={handleLanguageChange}
            >
              <Option value="uz">O'zbekcha</Option>
              <Option value="ru">Русский</Option>
              <Option value="en">English</Option>
            </Select>

            {/* Hamburger menu for mobile */}
            <div className="menu-icon" onClick={toggleMenu}>
              &#9776;
            </div>

            <a className="contact1" href="#contact1">
              <button className="contact-button">{t('contact')}</button>
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
