import React from 'react';
import styles from './Button.module.scss';

const Button = ({
  label,
  onClick,
  varient = 'button',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      className={`${styles.button} ${varient === 'primary' && styles['button--primary']} ${disabled && styles['button--disabled']}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

export default Button;
