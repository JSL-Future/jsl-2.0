import React from 'react'
import Style from './style.module.css'

const selectOption = (props) => {
  return(
    <select
      className={Style.selectOptions}
      value={props.selectValue}
      name={props.selectName}
      onChange={props.onchange}
    >
      {
        props.options.map((option, index) => (
          <option
            key={index}
            value={option.value}
            hidden={option.hidden}
            disabled={option.disabled}
          >
            {option.name}
          </option>
          )
        )
      }
    </select>
  )
}

export default selectOption
