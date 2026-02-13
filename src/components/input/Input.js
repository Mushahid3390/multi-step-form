import styles from './Input.module.scss'

const Input = ({ label, type, placeholder, value, name, onChange }) => {
  return (
    <div className={`${styles.inputcont}`}>
      <label className={`${styles.inputcont__label}`} htmlFor={name}>{label}</label>
      <input
        className={`${styles.inputcont__input}`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  )
}

export default Input
