import React from 'react'
import styles from "./Button.module.scss";


const Button = ({label, onClick, varient="button", type="button"}) => {
  return (
    <button
     className={`${styles.button} ${varient==="primary"&&styles.primary}`}
     onClick={onClick}
     type={type}>

      {label}
      
    </button>
  )
}

export default Button
