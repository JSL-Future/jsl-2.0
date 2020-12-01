import React from 'react'
import MaskedInput from 'react-maskedinput'
import classNames from 'classnames'
import style from './style.module.css'

const input = (props) => {
  return (
    <label className={classNames({
      [style.labelError]: props.formErrors && props.formErrors[props.name]
    })}>
      {props.label}
      {
        props.mask ? (
          <MaskedInput className={classNames({
            [style.inputError]: props.formErrors && props.formErrors[props.name]
          })}
            value={props.value}
            type={props.type}
            name={props.name}
            id={props.name}
            onChange={props.onchange}
            onBlur={props.onblur}
            mask={props.mask}
            guide={props.guide}
          />
        )
        : (
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
        )
      }
      <small className={style.errorMessage}>
        {props.formErrors && props.formErrors[props.name]}
      </small>
    </label>
  )
}

export default input
