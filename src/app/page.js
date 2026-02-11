"use client";
import Navbar from "@/components/sections/navbar/Navbar";
import styles from "./page.module.scss";
import DashboardLayout from "@/components/dashboardLayout/DashboardLayout";
import PersonalInfo from "@/components/sections/personalInfo/PersonalInfo";
import OurServices from "@/components/sections/services/OurServices";
import Plans from "@/components/sections/plans/Plans";
import {useState} from "react";
import Thank from "@/components/sections/thankyou/Thank";


export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalInfoData, setPersonalInfoData] = useState({});
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("");

  const setUser = (data) => {
    setPersonalInfoData(data);
    setCurrentStep(2);
  }

  const setServices = (service) => {
    setSelectedServices(service);
    setCurrentStep(3);
  }

  const setPlan = (plan) => {
    const userData = {
      ...personalInfoData,
      services: selectedServices,
      plan: plan,
    };
    localStorage.setItem(`${userData.email}`, JSON.stringify(userData));
    setSelectedPlan(plan);
    setCurrentStep(4);
  }
  
  const handleNext = () => {
    setCurrentStep((prev) => Math.min(prev + 1, 3));
  }
  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  }
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Navbar />
        <DashboardLayout stepN={currentStep}>
          {currentStep === 1 && <PersonalInfo onNext={handleNext} setUser={setUser}/>}
          {currentStep === 2 && <OurServices setServices={setServices} onBack={handleBack}/>}
          {currentStep === 3 && <Plans  setPlan={setPlan} onBack={handleBack}/>}
          {currentStep === 4 && <Thank email={personalInfoData.email} />}
        </DashboardLayout>
      </main>
    </div>
  );
}
