import React from 'react'
import style from './style.module.css'

const selectOption = (props) => {
  return(
      <select className={style.selectOptions}>
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
