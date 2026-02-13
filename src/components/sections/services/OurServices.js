'use client';
import Image from 'next/image';
import { useState } from 'react';
import styles from './OurServices.module.scss';
import icon1 from '../../../../public/icons/Icon.svg';
import icon2 from '../../../../public/icons/Icon2.svg';
import icon3 from '../../../../public/icons/Icon3.svg';
import icon4 from '../../../../public/icons/Icon4.svg';
import icon5 from '../../../../public/icons/Icon5.svg';
import icon6 from '../../../../public/icons/Icon6.svg';
import Button from '../../button/Button.js';

const OurServices = ({ setServices, onBack }) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(selectedService === service ? null : service);
  };

  const handleNext = () => {
    if (selectedService) {
      setServices(selectedService);
    }
  };
  return (
    <div className={`${styles.ourServices}`}>
      <div className={`${styles.ourServices__Content}`}>
        <div className={`${styles.ourServices__Header}`}>
          <h2>Our Services</h2>
          <p>Step 2/3</p>
        </div>

        <div className={`${styles.ourServices__Body}`}>
          <div
            className={`${styles.ourServices__Card} ${selectedService === 'Development' ? styles['ourServices__Card--Active'] : ''}`}
            onClick={() => handleServiceClick('Development')}
          >
            <Image src={icon1} alt="icon" />
            <p
              className={`${styles.ourServices__P} ${
                selectedService === 'Development'
                  ? styles['ourServices__P--active']
                  : ''
              }`}
            >
              Development
            </p>
          </div>

          <div
            className={`${styles.ourServices__Card} ${selectedService === 'Web Design' ? styles['ourServices__Card--Active'] : ''}`}
            onClick={() => handleServiceClick('Web Design')}
          >
            <Image src={icon2} alt="icon" />
            <p
              className={`${styles.ourServices__P} ${
                selectedService === 'Web Design'
                  ? styles['ourServices__P--active']
                  : ''
              }`}
            >
              Web Design
            </p>
          </div>

          <div
            className={`${styles.ourServices__Card} ${selectedService === 'Marketing' ? styles['ourServices__Card--Active'] : ''}`}
            onClick={() => handleServiceClick('Marketing')}
          >
            <Image src={icon3} alt="icon" />
            <p
              className={`${styles.ourServices__P} ${
                selectedService === 'Marketing'
                  ? styles['ourServices__P--active']
                  : ''
              }`}
            >
              Marketing
            </p>
          </div>

          <div
            className={`${styles.ourServices__Card} ${selectedService === 'Brand Strategy' ? styles['ourServices__Card--Active'] : ''}`}
            onClick={() => handleServiceClick('Brand Strategy')}
          >
            <Image src={icon4} alt="icon" />
            <p
              className={`${styles.ourServices__P} ${
                selectedService === 'Brand Strategy'
                  ? styles['ourServices__P--active']
                  : ''
              }`}
            >
              Brand Strategy
            </p>
          </div>

          <div
            className={`${styles.ourServices__Card} ${selectedService === 'Optimization' ? styles['ourServices__Card--Active'] : ''}`}
            onClick={() => handleServiceClick('Optimization')}
          >
            <Image src={icon5} alt="icon" />
            <p
              className={`${styles.ourServices__P} ${
                selectedService === 'Optimization'
                  ? styles['ourServices__P--active']
                  : ''
              }`}
            >
              Optimization
            </p>
          </div>

          <div
            className={`${styles.ourServices__Card} ${selectedService === 'Other' ? styles['ourServices__Card--Active'] : ''}`}
            onClick={() => handleServiceClick('Other')}
          >
            <Image src={icon6} alt="icon" />
            <p
              className={`${styles.ourServices__P} ${
                selectedService === 'Other'
                  ? styles['ourServices__P--active']
                  : ''
              }`}
            >
              Other
            </p>
          </div>
        </div>

        <div className={`${styles.ourServices__Footer}`}>
          <Button label="Go Back" varient="button" onClick={onBack} />
          <Button
            label="Next Step"
            varient="primary"
            onClick={handleNext}
            disabled={!selectedService}
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
