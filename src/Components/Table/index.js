import React from 'react'
import style from './style.module.css'

const table = () => {
  return(
    <div>
      <table class={style.table}>
        <thead>
          <th>Placa</th>
          <th>Data Entrada</th>
          <th>Evento</th>
          <th></th>
        </thead>
        <tbody>
          <tr>
            <td>DSG2100</td>
            <td>02/11/2020 às 08:00</td>
            <td>Preventiva</td>
            <td></td>
          </tr>
          <tr>
            <td>DSG2100</td>
            <td>02/11/2020 às 08:00</td>
            <td>Corretiva</td>
            <td></td>
          </tr>
          <tr>
            <td>DSG2100</td>
            <td>02/11/2020 às 08:00</td>
            <td>Estacionamento</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default table
