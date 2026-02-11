import React from "react";
import styles from "./Thank.module.scss";
import Button from "@/components/button/Button";

const Thank = ({ email }) => {
  const user = JSON.parse(localStorage.getItem(email));
  return (
    <div className={`${styles.thankWrapper}`}>
      <div className={`${styles.thankContainer}`}>
        <h2>Thank you for your submission!</h2>
        <p>
          Your information has been successfully submitted. We will review your
          details and get back to you shortly.
        </p>

        <div className={styles.card}>
          <h2 className={styles.heading}>User Details</h2>

          <div className={styles.row}>
            <strong>Name:</strong> <span>{user.name}</span>
          </div>

          <div className={styles.row}>
            <strong>Email:</strong> <span>{user.email}</span>
          </div>

          <div className={styles.row}>
            <strong>Address:</strong> <span>{user.address}</span>
          </div>

          <div className={styles.row}>
            <strong>Company:</strong> <span>{user.company}</span>
          </div>

          <div className={styles.row}>
            <strong>Phone:</strong> <span>{user.phone}</span>
          </div>

          <div className={styles.row}>
            <strong>Service:</strong> <span>{user.services}</span>
          </div>

          <div className={styles.row}>
            <strong>Plan:</strong> <span>{user.plan[0]}</span>
          </div>
        </div>
         <Button label={"Go to Homepage"} varient={"primary"} onClick={() => window.location.reload()}/>
      </div>
    </div>
  );
};
export default Thank;
