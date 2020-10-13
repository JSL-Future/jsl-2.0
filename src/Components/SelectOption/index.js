import React from 'react'
import style from './style.module.css'

const selectOption = (props) => {
  return(
    <div className={style.select}>
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
    </div>
  )
}

export default selectOption