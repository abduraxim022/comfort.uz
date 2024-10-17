import React, { useEffect } from "react";
import { Achievment, Hanshake, Spark } from "../svgformatter";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from 'react-i18next';

export default function Whyus() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="negabiz">
          <div data-aos="flip-up" className="negabiz-text">
            <h1>{t('why_us')}</h1>
          </div>
          <p className="line"></p>
          <div className="cards">
            <div data-aos="fade-right" className="spark-div">
              <Spark />
              <h2>{t('fast_service')}</h2>
              <p>{t('fast_service_desc')}</p>
            </div>
            <div data-aos="fade-right" className="achievment-div">
              <Achievment />
              <h2>{t('expert_team')}</h2>
              <p>{t('expert_team_desc')}</p>
            </div>
            <div data-aos="fade-right" className="handshake-div">
              <Hanshake />
              <h2>{t('convenient_time')}</h2>
              <p>{t('convenient_time_desc')}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="about-backimg">
          <div data-aos="fade-right">
            <h2>{t('discount')}</h2>
            <p>{t('discount_desc')}</p>
            <a href="tel:+998950003080">998-95-000-30-80</a> <br />
            <a href="tel:+998950603080">998-95-060-30-80</a>
            <div className="about-btn">
              <a href="#contact1">
                <button className="main-button">
                  {t('contact_us')}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
