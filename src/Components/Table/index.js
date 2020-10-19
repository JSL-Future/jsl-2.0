import React from 'react'
import BUtton from '../Button'
import style from './style.module.css'

const table = (props) => {
  return(
    <div>
      <h1>Implementos</h1>
      <table class={style.table}>
        <thead>
          <th>Placa</th>
          <th>Data Entrada</th>
          <th>Evento</th>
          <th></th>
        </thead>
        <tbody>
          {props.data.map(item =>(
                <tr>
                  <td>{item.placa}</td>
                  <td>{item.date}</td>
                  <td>{item.event}</td>
                  <td>
                    <BUtton>
                      Liberar
                    </BUtton>                  
                  </td>
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
