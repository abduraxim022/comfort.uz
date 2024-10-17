import React from 'react';
import clean from '../images/clean.png';
import dazmol from '../images/dazmol.png';
import gilam from '../images/gilam.png';
import parda from '../images/parda.png';
import adyol from '../images/adyol.png';
import { useTranslation } from 'react-i18next';

export default function Servicetype() {
  const { t } = useTranslation();

  // Services object to store information about each service
  const services = [
    {
      imgSrc: clean,
      altText: 'clean.png',
      title: t('we_clean_more'),
    },
    {
      imgSrc: dazmol,
      altText: 'dazmol.png',
      title: t('all_furniture'),
    },
    {
      imgSrc: parda,
      altText: 'parda.png',
      title: t('all_curtains'),
    },
    {
      imgSrc: gilam,
      altText: 'gilam.png',
      title: t('all_carpets'),
    },
    {
      imgSrc: adyol,
      altText: 'adyol.png',
      title: t('all_blankets'),
    },
  ];

  return (
    <div id='service'>
      <div className='container'>
        <div className='ximat'>
          <div data-aos="flip-up">
            <h1>{t('service_types')}</h1>
          </div>
          <div  className='xizmat-cards'>
            {services.map((service, index) => (
              <div data-aos="fade-right" key={index}>
                <img src={service.imgSrc} alt={service.altText} />
                <h3>{service.title}</h3>
                <a href='#contact1'>
                  <button className='xizmat-btn'>{t('contact')}</button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
