"use client"
import {useState} from "react";
import styles from "./PersonalInfo.module.scss";    
import Input from "@/components/input/Input";
import Button from "../../button/Button.js";

const PersonalInfo = ({setUser}) => {
    const [formData, setFormData] = useState({
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
    });

const [error, setError] = useState({
       name: "",
      email: "",
      phone: "",
    });

const handleFormData = (e) => {
  const {name , value} = e.target;
   setFormData((prev) => {
   return {
      ...prev,
      [name]: value,
    };
   });

   setError((pre) => {
    return{
      ...pre,
      [name]: "",
    };
   });
}

const handleFormSubmit = (e) => {
   e.preventDefault();
   const error = dataValidate(formData);
   if(Object.keys(error).length>0){
    setError(error);
    return;
   }

   setUser(formData);
}

const dataValidate = ({name, email, phone}) => {
  const error = {};

  let namePattern = /^[A-za-z\s]+$/;
  let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let phonePattern = /^[+-]?[0-9]{10}$/;


  // name validation
  if(!name){
    error.name= "Name is required";
  }else if(name.length>20){
    error.name= "Name must be less than 20 characters"
  }else if(!namePattern.test(name.trim())){
    error.name = "Name can contain on;ly letter or space";
  }

  // Email validation 
  if(!email){
    error.email = "Email is required";
  }else if(!emailPattern.test(email.trim())){
    error.email = "Invalid Email";
  }

  // Phone validation 
  if(!phone){
    error.phone = "Phone is required";
  }else if(!phonePattern.test(phone.trim())){
    error.phone = "Invalid Phone number"
  }
  return error;
}

  return (
    <div className={`${styles.personalInfoSection}`}>
      <div className={`${styles.personalInfoContainer}`}>
        <form onSubmit={handleFormSubmit} className={`${styles.personalInfoForm}`}>
          <h3 className={`${styles.personalInfoTitle}`}>Personal Information</h3>
          <div className={`${styles.personalInfoInputs}`}>
            <div>
               <Input label={"Full name"} 
                   type={"text"}
                   placeholder={"Enter your full name"} 
                   value={formData.name} 
                   onChange={handleFormData}
                   name={"name"}/>
                {Object.keys(error).length>0&&<p className={styles.error}>{error.name}</p>}
            </div>

           <div>
             <Input label={"Email"}
                   type={"email"}
                   placeholder={"Enter your email address"} 
                   value={formData.email}
                   onChange={handleFormData}
                   name={"email"}/>
               {Object.keys(error).length>0&&<p className={styles.error}>{error.email}</p>}
           </div>
            
            <div>
              <Input label={"Phone number"}
                   type={"tel"}
                   placeholder={"Enter your phone number"} 
                   value={formData.phone}
                   onChange={handleFormData}
                   name={"phone"}/>
                {Object.keys(error).length>0&&<p className={styles.error}>{error.phone}</p>}
            </div>

            <div>
              <Input label={"Company"}
                   type={"text"}
                   placeholder={"Enter your company name"} 
                   value={formData.company}
                   onChange={handleFormData}
                   name={"company"}/>
            </div>

          </div>
              <Input label={"Address"}
                     type={"text"}
                     placeholder={"Enter your address"} 
                     value={formData.address}
                     onChange={handleFormData}
                     name={"address"}/>

           <div className={`${styles.personalInfoBtn}`}>
            <Button label= "Continue" varient="primary" type="submit"/>
           </div>
        </form>
      </div>
    </div>
  );
};

export default PersonalInfo;
