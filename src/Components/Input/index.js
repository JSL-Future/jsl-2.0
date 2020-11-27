import React from 'react'
import classNames from 'classnames'
import style from './style.module.css'

const input = (props) => {
  return (
    <label className={classNames({
      [style.labelError]: props.formErrors && props.formErrors[props.name]
    })}>
      {props.label}
      <input className={classNames({
        [style.inputError]: props.formErrors && props.formErrors[props.name]
      })}
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={props.onchange}
        onBlur={props.onblur}
      />
      <small className={style.errorMessage}>
        {props.formErrors && props.formErrors[props.name]}
      </small>
    </label>
  )
}

export default input
