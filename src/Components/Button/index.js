import React from 'react'
import style from './style.module.css'

const Button = (props) => {
  return (
    <button className={style.button}>
      {props.text}
    </button>
  )
}

export default Button
