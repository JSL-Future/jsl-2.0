import React from 'react'
import style from './style.module.css'

const input = (props) => {
  return (
    <div>
      <label>
        {props.children}
        <input className={style}
          type={props.type} 
          name={props.type} 
          id={props.type}
        />
      </label>
    </div>
  )
}

export default input
