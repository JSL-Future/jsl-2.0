import React from 'react'
import classNames from 'classnames'
import style from './style.module.css'

const Button = (props) => {
  return (
    <button
      className={classNames(style.button, {
        [style.buttonOutline]: props.outline
      })}
      onClick={props.action}
      type="button"
    >
      {props.children}
    </button>
  )
}

export default Button
