import React from 'react'
import Button from '../Button'
import InputSearch from '../InputSearch'
import Style from './style.module.css'

const table = (props) => {
  return(
    <div className={Style.container}>
      <h1>Implementos</h1>
      <InputSearch  
        name=""
        onChange=""
        type=""
        placeholder="Pesquisar"
      />
      <table class={Style.table}>
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
                    <Button>
                      Liberar
                    </Button>                  
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
