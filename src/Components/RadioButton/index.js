import React from 'react'
import styles from './style.module.css'

const RadioButton = (props) => {
  return(
    <label className={styles.container} htmlFor={props.value}>
      {props.value}
      <input
        id={props.value}
        name={props.name}
        onChange={props.onchange}
        type="radio"
        value={props.value}
      />
      <span className={styles.checkmark}></span>
    </label>
  )
}

export default RadioButton
