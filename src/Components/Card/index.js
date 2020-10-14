import React from 'react'
import style from './style.module.css'

const card = (props) => {
  return (
    <div className={style.card}>
      {props.children}
    </div>
  )
}

export default card
