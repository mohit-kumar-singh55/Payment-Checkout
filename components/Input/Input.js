import React from 'react';
import styles from "./Input.module.css";

const Input = ({ label, id, type, placeholder }) => {
    return (
        <div className={styles.container}>
            <label className={styles.label} htmlFor={id}>{label}</label>
            <input className={styles.input} type={type} placeholder={placeholder} id={id} />
        </div>
    )
}

export default Input;