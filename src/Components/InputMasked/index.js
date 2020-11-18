import React from 'react'
import MaskedInput from 'react-text-mask'
import style from './style.module.css'

const InputMasked = (props) => {
  return (
    <label>
      {props.label}
      <MaskedInput className={style.input}
        value={props.value}
        type={props.type}
        name={props.name}
        id={props.name}
        onChange={props.onchange}
        onBlur={props.onblur}
        mask={props.mask}
        guide={props.guide}
      />
    </label>
  )
}

export default InputMasked
