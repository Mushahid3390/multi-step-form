"use client"
import React from 'react'
import Button from '../../button/Button'
import user from "../../../../public/icons/User.svg"
import calander from "../../../../public/icons/Calendar.svg"
import styles from "./Plans.module.scss"
import Image from 'next/image'
import { useState } from 'react'

const Plans = ({setPlan, onBack}) => {
  const [selectedPlan, setSelectedPlan] = useState([]);

  const handleplanSelection = (plan) => {
    if (selectedPlan.includes(plan)) {
      setSelectedPlan(selectedPlan.filter((p) => p !== plan));
    } else {
      setSelectedPlan([...selectedPlan, plan]);
    }
  }
  return (
   <div className={`${styles.plansWrapper}`}>
      <div className={`${styles.plansContainer}`}>
      <div className={`${styles.plansHeader}`}>
        <h2>Available plans</h2>
        <p>Select the plan that best fits your needs and budget.</p>
      </div>
        <div className={`${styles.plansBody} `}>
            <div className={`${styles.planCard} ${selectedPlan.includes("Basic Plan") ? styles.activeplanCard : ""}`} onClick={() => handleplanSelection("Basic Plan")}>
               <div className={`${styles.selectBtn} ${selectedPlan.includes("Basic Plan") ? styles.activeSelectBtn : ""}`}></div>
              <div className={`${styles.planCardHeader}`}>
                <h3>Basic Plan</h3>
                <p>Limited access to essential features</p>
              </div>
              <div className={`${styles.planCardValidation} ${selectedPlan.includes("Basic Plan") ? styles.activePlanCardValidation : ""}`}>
                <div className={`${styles.planUserLimit}`}>
                  <Image src={user} alt={"icon"} width={14} height={14}/>
                  <p>Up to 5 Users</p>
                </div>
                <div className={`${styles.planBillingCycle}`}>
                  <Image src={calander} alt={"icon"} width={14} height={14}/>
                  <p>Monthly</p>
                </div>
              </div>
            </div>


            <div className={`${styles.planCard} ${selectedPlan.includes("Professional Plan") ? styles.activeplanCard : ""}`} onClick={() => handleplanSelection("Professional Plan")}>
              <div className={`${styles.selectBtn} ${selectedPlan.includes("Professional Plan") ? styles.activeSelectBtn : ""}`}></div>
              <div className={`${styles.planCardHeader}`}>
                <h3>Professional Plan</h3>
                <p>All advanced features included</p>
              </div>
              <div className={`${styles.planCardValidation} ${selectedPlan.includes("Professional Plan") ? styles.activePlanCardValidation : ""}`}>
                <div className={`${styles.planUserLimit}`}>
                  <Image src={user} alt={"icon"} width={14} height={14}/>
                  <p>Up to 25 Users</p>
                </div>
                <div className={`${styles.planBillingCycle}`}>
                  <Image src={calander} alt={"icon"} width={14} height={14}/>
                  <p>Monthly</p>
                </div>
              </div>
            </div>


            <div className={`${styles.planCard} ${selectedPlan.includes("Premium Plan") ? styles.activeplanCard : ""}`} onClick={() => handleplanSelection("Premium Plan")}>
              <div className={`${styles.selectBtn} ${selectedPlan.includes("Premium Plan") ? styles.activeSelectBtn : ""}`}></div>
              <div className={`${styles.planCardHeader}`}>
                <h3>Premium Plan</h3>
                <p>Complete access and priority support</p>
              </div>
              <div className={`${styles.planCardValidation} ${selectedPlan.includes("Premium Plan") ? styles.activePlanCardValidation : ""}`}>
                <div className={`${styles.planUserLimit}`}>
                  <Image src={user} alt={"icon"} width={14} height={14}/>
                  <p>Up to 100 Users</p>
                </div>
                <div className={`${styles.planBillingCycle} `}>
                  <Image src={calander} alt={"icon"} width={14} height={14}/>
                  <p>Annual</p>
                </div>
              </div>
            </div> 


            <div className={`${styles.planCard} ${selectedPlan.includes("Enterprise Plan") ? styles.activeplanCard : ""}`} onClick={() => handleplanSelection("Enterprise Plan")}>
              <div className={`${styles.selectBtn} ${selectedPlan.includes("Enterprise Plan") ? styles.activeSelectBtn : ""}`}></div>
              <div className={`${styles.planCardHeader}`}>
                <h3>Enterprise Plan</h3>
                <p>Custom solutions for large teams</p>
              </div>
              <div className={`${styles.planCardValidation} ${selectedPlan.includes("Enterprise Plan") ? styles.activePlanCardValidation : ""}`}>
                <div className={`${styles.planUserLimit}`}>
                  <Image src={user} alt={"icon"} width={14} height={14}/>
                  <p>Unlimited users</p>
                </div>
                <div className={`${styles.planBillingCycle}`}>
                  <Image src={calander} alt={"icon"} width={14} height={14}/>
                  <p>Annual</p>
                </div>
              </div>
            </div>


        </div>
        <div className={`${styles.plansFooter}`}>
            <p>Step 2 of 3</p>
            <div className={`${styles.navigationButtons}`}>
                <Button label={"Back"} varient={"button"} type="button" onClick={onBack}/>
                <Button label={"Next"} varient={"primary"} type="button" onClick={() => setPlan(selectedPlan)} disabled={selectedPlan.length>0?false:true}/>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Plans
