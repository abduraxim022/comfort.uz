import React from "react";
import { useTranslation } from "react-i18next";
import manwithcarpet from "../images/manwithcarpet.png";
import mini from "../images/mini.png";

export default function Maon() {
  const { t } = useTranslation();

  return (
    <div id="main">
      <div className="container">
        <div className="main-div">
          <div className="text-content">
            <h1>{t("service")}</h1>
            <p>{t("description")}</p>
            <div className="main-mini_img">
              <img width={"250px"} height={"250px"} src={mini} alt="mini.png" />
            </div>
            <a href="#contact1">
              <button className="main-button">{t("contact")}</button>
            </a>
          </div>
          <div className="image-container">
            <img
              className="main-img"
              src={manwithcarpet}
              alt="Man with Carpet"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
