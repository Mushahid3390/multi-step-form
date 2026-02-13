"use client";
import React from "react";
import Button from "../../button/Button";
import user from "../../../../public/icons/User.svg";
import calander from "../../../../public/icons/Calendar.svg";
import styles from "./Plans.module.scss";
import Image from "next/image";
import { useState } from "react";

const Plans = ({ setPlan, onBack }) => {
  const [selectedPlan, setSelectedPlan] = useState([]);

  const handleplanSelection = (plan) => {
    if (selectedPlan.includes(plan)) {
      setSelectedPlan(selectedPlan.filter((p) => p !== plan));
    } else {
      setSelectedPlan([...selectedPlan, plan]);
    }
  };
  return (
    <div className={`${styles.plansWrap}`}>
      <div className={`${styles.plansWrap__plansCont}`}>

        <div className={`${styles.plansWrap__Header}`}>
          <h2>Available plans</h2>
          <p>Select the plan that best fits your needs and budget.</p>
        </div>

        <div className={`${styles.plansWrap__Body} `}>
          <div
            className={`${styles.plansWrap__Card} ${selectedPlan.includes("Basic Plan") ? styles["plansWrap__Card--Active"] : ""}`}
            onClick={() => handleplanSelection("Basic Plan")}
          >
            <div
              className={`${styles.plansWrap__selectBtn} ${selectedPlan.includes("Basic Plan") ? styles["plansWrap__SelectedBtn--Active"] : ""}`}
            ></div>
            <div className={`${styles.plansWrap__CardHeader}`}>
              <h3>Basic Plan</h3>
              <p>Limited access to essential features</p>
            </div>
            <div
              className={`${styles.plansWrap__CardValidation} ${selectedPlan.includes("Basic Plan") ? styles["plansWrap__CardValidation--Active"] : ""}`}
            >
              <div className={`${styles.plansWrap__UserLimit}`}>
                <Image src={user} alt={"icon"} width={14} height={14} />
                <p>Up to 5 Users</p>
              </div>
              <div className={`${styles.plansWrap__BillingCycle}`}>
                <Image src={calander} alt={"icon"} width={14} height={14} />
                <p>Monthly</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.plansWrap__Card} ${selectedPlan.includes("Professional Plan") ?styles["plansWrap__Card--Active"] : ""}`}
            onClick={() => handleplanSelection("Professional Plan")}
          >
            <div
              className={`${styles.plansWrap__selectBtn} ${selectedPlan.includes("Professional Plan") ? styles["plansWrap__SelectedBtn--Active"] : ""}`}
            ></div>
            <div className={`${styles.plansWrap__CardHeader}`}>
              <h3>Professional Plan</h3>
              <p>All advanced features included</p>
            </div>
            <div
              className={`${styles.plansWrap__CardValidation} ${selectedPlan.includes("Professional Plan") ? styles["plansWrap__CardValidation--Active"] : ""}`}
            >
              <div className={`${styles.plansWrap__UserLimit}`}>
                <Image src={user} alt={"icon"} width={14} height={14} />
                <p>Up to 25 Users</p>
              </div>
              <div className={`${styles.plansWrap__BillingCycle}`}>
                <Image src={calander} alt={"icon"} width={14} height={14} />
                <p>Monthly</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.plansWrap__Card} ${selectedPlan.includes("Premium Plan") ? styles["plansWrap__Card--Active"] : ""}`}
            onClick={() => handleplanSelection("Premium Plan")}
          >
            <div
             className={`${styles.plansWrap__selectBtn} ${selectedPlan.includes("Premium Plan") ? styles["plansWrap__SelectedBtn--Active"] : ""}`}
            ></div>
            <div className={`${styles.plansWrap__CardHeader}`}>
              <h3>Premium Plan</h3>
              <p>Complete access and priority support</p>
            </div>
            <div
              className={`${styles.plansWrap__CardValidation} ${selectedPlan.includes("Premium Plan") ? styles["plansWrap__CardValidation--Active"] : ""}`}
            >
              <div className={`${styles.plansWrap__Limit}`}>
                <Image src={user} alt={"icon"} width={14} height={14} />
                <p>Up to 100 Users</p>
              </div>
              <div className={`${styles.plansWrap__BillingCycle} `}>
                <Image src={calander} alt={"icon"} width={14} height={14} />
                <p>Annual</p>
              </div>
            </div>
          </div>

          <div
            className={`${styles.plansWrap__Card} ${selectedPlan.includes("Enterprise Plan") ? styles["plansWrap__Card--Active"] : ""}`}
            onClick={() => handleplanSelection("Enterprise Plan")}
          >
            <div
              className={`${styles.plansWrap__selectBtn} ${selectedPlan.includes("Enterprise Plan") ? styles["plansWrap__SelectedBtn--Active"] : ""}`}
            ></div>
            <div className={`${styles.plansWrap__CardHeader}`}>
              <h3>Enterprise Plan</h3>
              <p>Custom solutions for large teams</p>
            </div>
            <div
              className={`${styles.plansWrap__CardValidation} ${selectedPlan.includes("Enterprise Plan") ? styles["plansWrap__CardValidation--Active"] : ""}`}
            >
              <div className={`${styles.plansWrap__UserLimit}`}>
                <Image src={user} alt={"icon"} width={14} height={14} />
                <p>Unlimited users</p>
              </div>
              <div className={`${styles.plansWrap__BillingCycle}`}>
                <Image src={calander} alt={"icon"} width={14} height={14} />
                <p>Annual</p>
              </div>
            </div>
          </div>
        </div>

        <div className={`${styles.plansWrap__Footer}`}>
          <p>Step 2 of 3</p>
          <div className={`${styles.plansWrap__NavigationButtons}`}>
            <Button
              label={"Back"}
              varient={"button"}
              type="button"
              onClick={onBack}
            />
            <Button
              label={"Next"}
              varient={"primary"}
              type="button"
              onClick={() => setPlan(selectedPlan)}
              disabled={selectedPlan.length > 0 ? false : true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Plans;
