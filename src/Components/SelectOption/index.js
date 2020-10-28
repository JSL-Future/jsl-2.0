import React from 'react'
import Style from './style.module.css'

const selectOption = (props) => {
  return(
      <select 
        className={Style.selectOptions}
        onChange={props.onChange}
      >
        {props.options.map(option => (
              <option 
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
