import React from 'react'
import styles from './style.module.css'

const RadioButton = (props) => {
  return(
    <label className={styles.container} htmlFor={props.value}>{props.value}
      <input
        id={props.value}
        type="radio"
        name={props.name}
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default RadioButton
