import styles from './Input.module.scss'

const Input = ({ label, type, placeholder, value, name, onChange }) => {
  return (
    <div className={`${styles.inputGroup}`}>
      <label className={`${styles.label}`} htmlFor={name}>{label}</label>
      <input
        className={`${styles.input}`}
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
