import React from 'react'
import style from './style.module.css'

const input = (props) => {
  return (
    <label>
      {props.label}
      <input className={style}
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={props.onchange}
        onBlur={props.onblur}
      />
    </label>
  )
}

export default input
