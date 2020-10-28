import React from 'react'
import Style from './style.module.css'

const selectOption = (props) => {
  return(
      <select 
        className={Style.selectOptions}
        onchange={props.onChange}
        value={props.selectValue}
        name={props.selectName}
      >
        {props.options.map((option, index) => (
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
