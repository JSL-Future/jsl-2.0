import React from 'react'
import style from './style.module.css'

const card = (props) => {
  return (
    <div className={style}>
      <h1>{props.title}</h1>
      <p>{props.text}</p>
    </div>
  )
}

export default card
