import React from 'react'
import style from './style.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerImg}>
        <img className={style.logo} src=""/>
      </div>
      <h1>JSL</h1>
    </div>
  )
}

export default Header
