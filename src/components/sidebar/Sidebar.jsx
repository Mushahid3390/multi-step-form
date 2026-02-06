import React from "react";
import logo from "../../../public/layoutLogo.svg";
import headPhoneLogo from "../../../public/Headphones.svg";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebar}>
        <div className={styles.logoContainer}>
          <Image src={logo} alt="logo" className={styles.logoImage} />
        </div>
        <div className={styles.stepsContainer}>
          <div className={`${styles.section}`}>
            <p className={`${styles.step} ${styles.stepNumber}`}>1</p>
            <div>
              <h3 className={styles.h3}>Personal Information</h3>
              <p className={styles.description}>
                Tell us who you are to get started.
              </p>
            </div>
          </div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.section}`}>
            <p className={`${styles.step} ${styles.stepNumber}`}>2</p>
            <div>
              <h3 className={styles.h3}>Subscription plan</h3>
              <p className={styles.description}>
                Choose the product plan that fits your needs.
              </p>
            </div>
          </div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.section}`}>
            <p className={`${styles.step} ${styles.stepNumber}`}>3</p>
            <div>
              <h3 className={styles.h3}>Identity verification</h3>
              <p className={styles.description}>
                Verify your identity for security purposes.
              </p>
            </div>
          </div>
          <div className={`${styles.bar}`}></div>
          <div className={`${styles.section}`}>
            <p className={`${styles.step} ${styles.stepNumber}`}>4</p>
            <div>
              <h3 className={styles.h3}>Activate account</h3>
              <p className={styles.description}>
                Final step! Let’s activate your account.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div>
            <h3 className={styles.footerH3}>Need help?</h3>
            <p className={styles.footerP}>chat with live support</p>
        </div>
        <Image src={headPhoneLogo} alt="logo" className={styles.footerLogo} />
      </div>
    </div>
  );
};

export default Sidebar;
