import React from 'react'
import style from './style.module.css'

const table = (props) => {
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
          {props.line.map(line =>(
                <tr>
                  <td>{line.placa}</td>
                  <td>{line.date}</td>
                  <td>{line.event}</td>
                </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default table
