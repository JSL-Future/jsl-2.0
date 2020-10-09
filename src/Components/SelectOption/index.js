import React from 'react'
import style from './style.module.css'

const selectOption = () => {
  return(
    <div className={style.select}>
      <h1>Evento</h1>
      <select className={style.selectOptions}>
        <option value="" disabled selected hidden>Selecione um evento</option>
        <option value="0">Preventiva</option>
        <option value="1">Corretiva</option>
        <option value="2">Estacionamneto</option>
      </select>
    </div>
  )
}

export default selectOption
