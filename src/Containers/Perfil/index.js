import React from 'react'
import Style from './style.module.css'
import { Menu } from '../../Components'

const Perfil = (props)=> {
  return (
    <div className={Style.container}>
       <div className={Style.header}>
        <h1>Perfil</h1>
      </div>
      <div className={Style.card}>
        <div>
          <h3>Nome completo</h3>
          <p>{props.name}</p>
        </div>
      </div>
      <div className={Style.card}>
        <div>
          <h3>CPF</h3>
          <p>{props.document}</p>
        </div>
      </div>
      <div 
        onClick={props.action} 
        className={Style.card}
      >
        <h3>Sair</h3>
      </div>
      <Menu />
    </div>
  )
}

export default Perfil
