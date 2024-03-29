import React from "react";
import styles from "./InputControl.module.css";

interface InputControlProps extends React.ComponentPropsWithRef<"input"> {
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

/*
<MyItem />
MyItem: <ul><ListItem>Foo</ListItem></ul>
ListItem: <li className="list-item">Foo</li>

<MyItem />
MyItem: <ul><ListItem>Foo</ListItem></ul>
ListItem: <li className="list-item">Foo</li>

*/
