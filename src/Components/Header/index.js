import ImageLogo from '../../assets/Images/logo-jsl.svg'
import React from 'react'
import style from './style.module.css'

const Header = () => {
  return (
    <div className={style.header}>
      <div className={style.headerImg}>
        <img className={style.logo}
          src={ImageLogo} alt="logo"
        />
      </div>
      <h1>JSL</h1>
    </div>
  )
}

export default Header
