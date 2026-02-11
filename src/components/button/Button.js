import React from 'react'
import styles from "./Button.module.scss";


const Button = ({label, onClick, varient="button", type="button", disabled=false}) => {
  return (
    <button
     className={`${styles.button} ${varient==="primary"&&styles.primary} ${disabled && styles.disabled}`}
     onClick={onClick}
     type={type}
     disabled={disabled}>

      {label}
      
    </button>
  )
}

export default Button
