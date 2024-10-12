import React from 'react';
import clean from '../images/clean.png';
import dazmol from '../images/dazmol.png';
import gilam from '../images/gilam.png';
import parda from '../images/parda.png';
import adyol from '../images/adyol.png';
import { useTranslation } from 'react-i18next';

export default function Xizmatturlari() {
  const { t } = useTranslation();

  return (
    <div id='service'>
      <div className='container'>
        <div className='ximat'>
          <div data-aos="flip-up">
            <h1>{t('service_types')}</h1>
          </div>
          <div data-aos="fade-right" className='xizmat-cards'>
            <div>
              <img src={clean} alt='clean.png' />
              <h3>{t('we_clean_more')}</h3>
              <a href='#contact1'>
                <button className='xizmat-btn'>{t('contact')}</button>
              </a>
            </div>
            <div>
              <img src={dazmol} alt='dazmol.png' />
              <h3>{t('all_furniture')}</h3>
              <a href='#contact1'>
                <button className='xizmat-btn'>{t('contact')}</button>
              </a>
            </div>
            <div>
              <img src={parda} alt='parda.png' />
              <h3>{t('all_curtains')}</h3>
              <a href='#contact1'>
                <button className='xizmat-btn'>{t('contact')}</button>
              </a>
            </div>
            <div>
              <img src={gilam} alt='gilam.png' />
              <h3>{t('all_carpets')}</h3>
              <a href='#contact1'>
                <button className='xizmat-btn'>{t('contact')}</button>
              </a>
            </div>
            <div>
              <img src={adyol} alt='adyol.png' />
              <h3>{t('all_blankets')}</h3>
              <a href='#contact1'>
                <button className='xizmat-btn'>{t('contact')}</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
