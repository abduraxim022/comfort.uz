import React from 'react';
import Slider from 'react-slick';
import video1 from '../video/video1.mp4';
import video2 from '../video/video2.mp4';
import video3 from '../video/video3.mp4';
import video4 from '../video/video4.mp4';
import video5 from '../video/video5.mp4'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css"; 
import { useTranslation } from 'react-i18next';

export default function Ishjarayoni() {
  const { t } = useTranslation();

  // Slick slider settings including breakpoints for responsiveness
  const getSliderSettings = () => {
    return {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Default number of videos to show
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
      responsive: [
        {
          breakpoint: 1200, // For screens smaller than 1200px
          settings: {
            slidesToShow: 2, // Show 2 videos per slide
          },
        },
        {
          breakpoint: 900, // For screens smaller than 900px (tablet)
          settings: {
            slidesToShow: 3, // Show 1 video per slide
          },
        },
        {
          breakpoint: 600, // For screens smaller than 600px (mobile)
          settings: {
            slidesToShow: 2, // Show 1 video per slide
          },
        },
        {
          breakpoint: 467, // For screens smaller than 467px
          settings: {
            slidesToShow: 1, // Show 1 video per slide
          },
        },
      ],
    };
  };

  const videos = [video1, video2, video3, video4,video5];

  return (
    <div id="ish-jarayoni">
      <div className="container">
        <div className="ish-div">
          <div data-aos="flip-up">
            <h1 className="ish-title">{t('projects_from_the_workplace')}</h1>
          </div>

          {/* Slick slider */}
          <div className="video-slider">
            <Slider {...getSliderSettings()}>
              {videos.map((video, index) => (
                <div className='index' key={index}>
                  <video
                    className="video-frame"
                    src={video}
                    controls
                    autoPlay
                    loop
                    muted
                  ></video>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}
