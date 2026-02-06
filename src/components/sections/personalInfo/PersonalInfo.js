import React from "react";
import styles from "./PersonalInfo.module.scss";    

const PersonalInfo = () => {
  return (
    <div className={`${styles.personalInfoSection}`}>
      <div className={`${styles.personalInfoContainer}`}>
        <form action="/submit-personal-info" className={`${styles.personalInfoForm}`}>
          <h3 className={`${styles.personalInfoTitle}`}>Personal Information</h3>
          <div className={`${styles.personalInfoInputs}`}>
            <div className={`${styles.personalInfoInputGroup}`}>
              <label className={`${styles.personalInfoLabel}`} htmlFor="name">Full name</label>
              <input className={`${styles.personalInfoInput}`} type="text" id="name" placeholder="Enter your full name" />
            </div>
            <div className={`${styles.personalInfoInputGroup}`}>
              <label className={`${styles.personalInfoLabel}`} htmlFor="email">Email</label>
              <input className={`${styles.personalInfoInput}`} type="email" id="email" placeholder="Enter your email" />
            </div>
            <div className={`${styles.personalInfoInputGroup}`}>
              <label className={`${styles.personalInfoLabel}`} htmlFor="phone">Phone number</label>
              <input className={`${styles.personalInfoInput}`} type="tel" id="phone" placeholder="(123) 000-0000" />
            </div>
            <div className={`${styles.personalInfoInputGroup}`}>
              <label className={`${styles.personalInfoLabel}`} htmlFor="company">Company</label>
              <input
                className={`${styles.personalInfoInput}`}             
                type="text"
                id="company"
                placeholder="Enter your company name"
              />
            </div>
          </div>
          <div  className={`${styles.personalInfoInputGroup}`}>
            <label className={`${styles.personalInfoLabel}`} htmlFor="address">Address</label>
            <input className={`${styles.personalInfoInput}`} type="text" id="address" placeholder="Enter your address" />
          </div>
        </form>
        <button type="submit" className={`${styles.continueButton}`}>Continue</button>
      </div>
    </div>
  );
};

export default PersonalInfo;
