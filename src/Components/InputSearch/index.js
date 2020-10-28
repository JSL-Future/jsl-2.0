import React from 'react'
import Style from './style.module.css'
import IconSearch from '../../assets/Images/icon-search.svg'

const InputSearch = (props) => {
  return (
    <div className={Style.container}>
      <img className={Style.iconSearch} src={IconSearch} alt="Pesquisa"/>
      <input
        className={Style.input}
        value={props.value}
        name={props.name}
        onChange={props.onchange}
        placeholder={props.placeholder}
        type={props.type}
      />
    </div>
  )
}

export default InputSearch
