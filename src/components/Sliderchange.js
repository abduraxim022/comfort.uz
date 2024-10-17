import React from "react";
import ReactBeforeSliderComponent from "react-before-after-slider-component";
import "react-before-after-slider-component/dist/build.css";
import before from "../images/before.jpg";
import after from "../images/after.jpg";
import { useTranslation } from "react-i18next";

export default function Sliderchange() {
  const { t } = useTranslation(); // Access the translation function

  const FIRST_IMAGE = {
    imageUrl: after, // Use the image URL directly as a string
  };
  const SECOND_IMAGE = {
    imageUrl: before, // Use the image URL directly as a string
  };

  return (
    <div>
      <div className="container container2">
        <div className="slider">
          <div data-aos="flip-up" className="slider-header">
            <h1 className="slider-text">{t("see_our_results")}</h1>
          </div>
          <div className="slider-img">
            <ReactBeforeSliderComponent
              firstImage={{ ...FIRST_IMAGE, style: { height: "416px" } }}
              secondImage={{ ...SECOND_IMAGE, style: { height: "416px" } }}
              currentPercentPosition={50} // Start the slider in the middle
              withClickToChange={true} // Enable clicking to slide
            />
          </div>
        </div>
      </div>
    </div>
  );
}
