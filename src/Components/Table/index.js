import React from 'react'
import Button from '../Button'
import InputSearch from '../InputSearch'
import Style from './style.module.css'
import moment from 'moment'

const diffTime = (initialDate, finalyDate, status) => {
  const start = moment(initialDate)
  const end = status === 'unavailable' ? moment() : moment(finalyDate)
  const diff = end.diff(start)
  console.log(">>>", initialDate)
  console.log("***", finalyDate)
  return moment.utc(diff).format('HH:mm')
}

const formattedDate = date => moment(date).format('DD/MM/yyyy HH:mm')

const table = (props) => {
  const buttonAction = (status, id) => {
    const children = status === 'unavailable' ? 'Liberar' : 'Detalhes'
    const actionButton = status === 'unavailable' ? props.release : props.detail
    const outline = status === 'unavailable' ? false : true
    return (
      <Button
        action={() => actionButton(id)}
        outline={outline}
      >
        {children}
      </Button>
    )
  }

  return (
    <div className={Style.container}>
      <div className={Style.headerContainer}>
        <h2>Implementos</h2>
        <InputSearch
          name="pesquisa"
          onChange={props.search}
          type="text"
          placeholder="Pesquisar"
        />
      </div>
      <table className={Style.table}>
        <thead>
         <tr>
          <th>Frota</th> 
          <th>Placa</th>
          <th>Data Entrada</th>
          <th>Evento</th>
          <th>Operação</th>
          <th>Permanência</th>
          <th />
         </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item.id} >
              <td>{item.fleet}</td>
              <td>{item.plate}</td>
              <td>{formattedDate(item.checkin.createdAt)}</td>
              <td>{item.event}</td>
              <td>{item.operation}</td>
              <td>{diffTime(item.checkin.createdAt, item.checkout.updatedAt, item.status)}</td>
              <td>{buttonAction(item.status, item.id)}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default table
