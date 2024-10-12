import React from 'react';
import video1 from '../video/video1.mp4';
import video2 from '../video/video2.mp4';
import video3 from '../video/video3.mp4';
import video4 from '../video/video4.mp4';
import { useTranslation } from 'react-i18next';

export default function Ishjarayoni() {
  const { t } = useTranslation();
  return (
    <div id="ish-jarayoni">
      <div className="container">
        <div className='ish-div'>
          <div data-aos="flip-up">

            <h1 className='ish-title'>
               {t('projects_from_the_workplace')}
            </h1>
          </div>
        <div className="video-grid">
          <div>
            <video
              className="video-frame"
              src={video1}
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div>
            <video
              className="video-frame"
              src={video2}
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div>
            <video
              className="video-frame"
              src={video3}
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
          <div>
            <video
              className="video-frame"
              src={video4}
              controls
              autoPlay
              loop
              muted
            ></video>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
