import React from "react";
import { useTranslation } from 'react-i18next'; // Import useTranslation
import logo from "../images/logo.png";

export default function Footer() {
  const { t } = useTranslation(); // Initialize translation hook

  return (
    <div className="container">
      <div className="footer-ul">
        <img src={logo} alt="logo" />
        <div data-aos ="fade-right" className="footer-div">
          <ul>
            <li>
              <p>{t('location')}</p> {/* Use translation for location */}
            </li>
            <li>
              <a href="tel:+998950003080">+998950003080</a>
            </li>
            <li>
              <a href="tel:+998990603080">+998990603080</a> 
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
