import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { useTranslation } from "react-i18next";
import "swiper/css";
import "swiper/css/pagination";

export default function Comment() {
  const { t } = useTranslation();

  // Swiper settings function
  const getSwiperSettings = () => {
    return {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true, // Infinite loop
      autoplay: {
        delay: 3000, // Autoplay delay (3 seconds)
        disableOnInteraction: false, // Continue autoplay after interaction
      },
      pagination: {
        clickable: true, // Clickable pagination dots
      },
      breakpoints: {
        1200: {
          slidesPerView: 3,
          spaceBetween: 0,// 3 slides on large screens
        },
        900: {
          slidesPerView: 2, // 2 slides on tablet
        },
        467: {
          slidesPerView: 1,
           spaceBetween: 0, // 1 slide on mobile
        },
      },
      modules: [Pagination, Autoplay], // Swiper modules
      className: "mySwiper", // Custom class for styling
    };
  };

  return (
    <div id="comment" className="comment-section">
      <div className="container">
        <h1>
          {t("comments_title", "Fikrlar")}
        </h1>

        <div className="swiper-wrapper">
          <Swiper className="swiper" {...getSwiperSettings()}>
            <SwiperSlide>
              <div className="testimonial-card">
                <h2>Nigora</h2>
                <p>{t("telegram_username", { username: "@nigora_dostva" })}</p>
                <p>{t("nigora_feedback")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <h2>Muxlisa</h2>
                <p>{t("telegram_username", { username: "@prsens" })}</p>
                <p>{t("muxlisa_feedback")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <h2>Lobar</h2>
                <p>{t("telegram_username", { username: "@hyot" })}</p>
                <p>{t("lobar_feedback")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <h2>Barno</h2>
                <p>{t("telegram_username", { username: "@barno" })}</p>
                <p>{t("barno_feedback")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <h2>Bonu</h2>
                <p>{t("telegram_username", { username: "@bonu_hamidova" })}</p>
                <p>{t("bonu_feedback")}</p>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="testimonial-card">
                <h2>Samiya</h2>
                <p>{t("telegram_username", { username: "@samiya_smm" })}</p>
                <p>{t("samiya_feedback")}</p>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}
