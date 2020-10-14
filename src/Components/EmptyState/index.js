import React from 'react'
import style from './style.module.css'
import imageEmptyState from '../../assets/Images/image-empty-state.svg'

const emptyState = (props) => {
  return (
    <div className={style.emptyState}>
      <img className={style.emptyStateImg} 
        src={imageEmptyState} 
        alt="sem dados"
      />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  )
}

export default emptyState
