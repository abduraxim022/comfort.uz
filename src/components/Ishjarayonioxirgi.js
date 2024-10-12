import React from "react";
import damas from "../images/damas.jpg";
import temir from "../images/temir.png";
import toza from "../images/toza.png";
import tozalovchi from "../images/tozalovchi.png";
import tozamen from "../images/tozaman.png";
import { useTranslation } from 'react-i18next';



export default function Ishjarayonioxirgi() {
  const { t } = useTranslation();
  const images = [
    { src: temir, alt: "Temir", title: "Temir", className: "small-image" },
    { src: toza, alt: "Toza", title: "Toza", className: "small-image" },
    {
      src: tozalovchi,
      alt: "Tozalovchi",
      title: "Tozalovchi",
      className: "small-image",
    },
    {
      src: tozamen,
      alt: "Tozamen",
      title: "Tozamen",
      className: "small-image",
    },
  ];

  return (
    <div className="container">
      <div>
        <div className="oxirgi-title" data-aos="flip-up">
          <h1>{t('work_process_title')}</h1>
        </div>
        <div className="ish-container_div">
          <div className="damas-container">
            <img src={damas} alt="Damas" className="damas-image" />
            <a href="#contact1">

            <button  className="centered-button">{t('contact')}</button>
            </a>
          </div>

          <div className="image-grid">
            {images.map((image, index) => (
              <div className="image-container" key={index}>
                <img src={image.src} alt={image.alt} className="image" />
                <a href="#contact1">
                <button className="centered-button">{t('contact')}  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
