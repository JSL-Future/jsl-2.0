import React from 'react'
import style from './style.module.css'

const emptyState = (props) => {
  return (
    <div className={style.emptyState}>
      <img className={style.emptyStateImg} src=""/>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default emptyState
