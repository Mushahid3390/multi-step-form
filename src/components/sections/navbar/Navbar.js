import Image from "next/image";
import styles from "./Navbar.module.scss";
import textLogo from '../../../../public/Multi-step-Form-logo.svg';
import logo from '../../../../public/logo.svg';

const Navbar = () => {
  return (
    <div className={styles.nav}>
       <Image
        src={logo}
        alt="Logo Icon"
       className={styles.logo}
      />
        <Image 
         src={textLogo} 
         alt="Logo"
         className={styles.textLogoContainer }
         />
    </div>
  );
};

export default Navbar;
