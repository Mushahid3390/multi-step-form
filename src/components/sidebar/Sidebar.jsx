import React from "react";
import logo from "../../../public/layoutLogo.svg";
import headPhoneLogo from "../../../public/Headphones.svg";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

const Sidebar = ({stepN}) => {
  return (
    <div className={styles.sidebar}>

      <div className={styles.sidebar__panel}>

        <div className={styles.sidebar__logo}>
          <Image src={logo} alt="logo" className={styles.sidebar__logoImage} />
        </div>

        <div className={styles.sidebar__stepsCont}>
          <div className={`${styles.sidebar__section}`}>
            <p className={`${styles.sidebar__step} ${stepN >= 1 ? styles["sidebar__step--active"] : ''}`}>1</p>
            <div>
              <h3 className={styles.sidebar__title}>Personal Information</h3>
              <p className={styles.sidebar__description}>
                Tell us who you are to get started.
              </p>
            </div>
          </div>
          <div className={`${styles.sidebar__progress}`}>
            <div className={`${styles.sidebar__progLine} ${stepN > 1 ? styles["sidebar__progLine--completed"] : ''}`}></div>
          </div>


          <div className={`${styles.sidebar__section}`}>
            <p className={`${styles.sidebar__step} ${stepN >= 2 ? styles["sidebar__step--active"] : ''}`}>2</p>
            <div>
              <h3 className={styles.sidebar__title}>Our Services</h3>
              <p className={styles.sidebar__description}>
                Select the services you are interested in.
              </p>
            </div>
          </div>
          <div className={`${styles.sidebar__progress}`}>
            <div className={`${styles.sidebar__progLine} ${stepN > 2 ? styles["sidebar__progLine--completed"] : ''}`}></div>
          </div>


          <div className={`${styles.sidebar__section}`}>
            <p className={`${styles.sidebar__step} ${stepN >= 3 ? styles["sidebar__step--active"] : ''}`}>3</p>
            <div>
              <h3 className={styles.sidebar__title}>Subscription plan</h3>
              <p className={styles.sidebar__description}>
                Choose the product plan that fits your needs.
              </p>
            </div>
          </div>
          
        </div>

      </div>


      <div className={styles.sidebar__footer}>
        <div>
            <h3 className={styles.sidebar__footTitle}>Need help?</h3>
            <p className={styles.sidebar__footText}>chat with live support</p>
        </div>
        <Image src={headPhoneLogo} alt="logo" className={styles.sidebar__footIcon} />
      </div>
    </div>
  );
};

export default Sidebar;
