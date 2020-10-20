import React from 'react'
import Button from '../Button'
import classNames from 'classnames'
import InputSearch from '../InputSearch'
import Style from './style.module.css'

const table = (props) => {
  return(
    <div className={Style.container}>
      <div className={Style.headerContainer}>
        <h1>Implementos</h1>
        <InputSearch  
          name="pesquisa"
          onChange={props.search}
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      <table class={Style.table}>
        <thead>
          <th>Placa</th>
          <th>Data Entrada</th>
          <th>Evento</th>
          <th>Permanência</th>
          <th></th>
        </thead>
        <tbody>
          {props.data.map(item =>(
                <tr>
                  <td>{item.placa}</td>
                  <td>{item.date}</td>
                  <td className={classNames(Style.event, {
                    [Style.preventiva] : props.preventiva,  
                    [Style.corretiva] : props.corretiva,  
                    [Style.estacionamento] : props.estacionamento,
                  })}
                    >{item.event}</td>
                  <td>{item.permanence}</td>
                  <td>
                    <Button 
                      action={props.release}
                    >
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
