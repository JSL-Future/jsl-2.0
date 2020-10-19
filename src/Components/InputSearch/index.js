import React from 'react'
import style from './style.module.css'
import IconSearch from '../../assets/Images/icon-search.svg'

const InputSearch = (props) => {
  return (
    <div className={style.container}>
      <img className={style.iconSearch} src={IconSearch} alt="Pesquisa"/>
      <input
        className={style.input}
        name={props.name}
        onChange={props.onchange}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  )
}

export default InputSearch
