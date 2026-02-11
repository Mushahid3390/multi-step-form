"use client"
import Image from 'next/image'
import {use, useState} from 'react'
import styles from "./OurServices.module.scss"
import icon1 from "../../../../public/icons/Icon.svg"
import icon2 from "../../../../public/icons/Icon2.svg"
import icon3 from "../../../../public/icons/Icon3.svg"
import icon4 from "../../../../public/icons/Icon4.svg"
import icon5 from "../../../../public/icons/Icon5.svg"
import icon6 from "../../../../public/icons/Icon6.svg"
import Button from '../../button/Button.js'

const OurServices = ({setServices, onBack}) => {
  const [selectedService, setSelectedService] = useState(null);

  const handleServiceClick = (service) => {
    setSelectedService(selectedService === service ? null : service);
  };

  const handleNext = () => {
    if(selectedService){
      setServices(selectedService);
    }
  }
  return (
    <div className={`${styles.ourServices}`}>
       <div className={`${styles.ourServicesContent}`}>
        <div className={`${styles.ourServicesHeader}`}>
            <h2>Our Services</h2>
            <p>Step 2/3</p>
        </div>

        <div className={`${styles.ourServicesBody}`}>
          <div className={`${styles.ourServicesCard} ${selectedService === "Development" ? styles.selected : ""}`} onClick={() => handleServiceClick("Development")}>
            <Image src={icon1} alt="icon"/>
            <p id={selectedService === "Development" ? styles.ourServicesCardText : ""}>Development</p>
           </div>
          <div className={`${styles.ourServicesCard} ${selectedService === "Web Design" ? styles.selected : ""}`} onClick={() => handleServiceClick("Web Design")} >
            <Image src={icon2} alt="icon"/>
            <p id={selectedService === "Web Design" ? styles.ourServicesCardText : ""}>Web Design</p>
           </div>
           <div className={`${styles.ourServicesCard} ${selectedService === "Marketing" ? styles.selected : ""  }`} onClick={() => handleServiceClick("Marketing")}>
            <Image src={icon3} alt="icon"/>
            <p id={selectedService === "Marketing" ? styles.ourServicesCardText : ""}>Marketing</p>
           </div>
           <div className={`${styles.ourServicesCard} ${selectedService === "Brand Strategy" ? styles.selected : ""}`} onClick={() => handleServiceClick("Brand Strategy")}  >
            <Image src={icon4} alt="icon"/>
            <p id={selectedService === "Brand Strategy" ? styles.ourServicesCardText : ""}>Brand Strategy</p>
           </div>
           <div className={`${styles.ourServicesCard} ${selectedService === "Optimization" ? styles.selected : "" }`} onClick={() => handleServiceClick("Optimization")}  >
            <Image src={icon5} alt="icon"/>
            <p id={selectedService === "Optimization" ? styles.ourServicesCardText : ""}>Optimization</p>
           </div>
            <div className={`${styles.ourServicesCard} ${selectedService === "Other" ? styles.selected : ""}`} onClick={() => handleServiceClick("Other")}    >
            <Image src={icon6} alt="icon"/>
            <p id={selectedService === "Other" ? styles.ourServicesCardText : ""}>Other</p>
           </div>
        </div>

        <div className={`${styles.ourServicesFooter}`}>
            <Button label="Go Back" varient="button" onClick={onBack}/>
            <Button label="Next Step" varient="primary" onClick={handleNext} disabled={!selectedService}/>
        </div>
       </div>
    </div>
  )
}

export default OurServices
