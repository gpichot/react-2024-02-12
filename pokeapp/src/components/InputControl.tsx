import styles from "./InputControl.module.css";

interface InputControlProps extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  name: string;
}

export default function InputControl({
  label,
  id,
  ...inputProps
}: InputControlProps) {
  const inputId = id || inputProps.name;

  return (
    <div className={styles.control}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
        {inputProps.required && <span className={styles.starRequired}>*</span>}
      </label>
      <input
        id={inputId}
        {...inputProps}
        className={`${styles.input} ${inputProps.className}`}
      />
    </div>
  );
}
