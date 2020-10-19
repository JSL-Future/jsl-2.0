import React from 'react'
import Style from './style.module.css'
import IconSearch from '../../assets/Images/icon-search.svg'

const InputSearch = (props) => {
  return (
    <div>
      <img src={IconSearch} alt="Pesquisa"/>
      <input className={Style}
        id={props.name}
        name={props.name} 
        onChange={props.onchange}
        placeholder={props.placeholder}
        type={props.type} 
      />
    </div>
  )
}

export default InputSearch
