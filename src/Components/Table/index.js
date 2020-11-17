import React from 'react'
import Button from '../Button'
// import InputSearch from '../InputSearch'
import Style from './style.module.css'
import moment from 'moment'

const diffTime = (initialDate, finalyDate, status) => {
  const start = moment(initialDate)
  const end = status === 'check-in' ? moment() : moment(finalyDate)
  const diff = end.diff(start)
  return moment.utc(diff).format('HH:mm')
}

const formattedDate = date => moment(date).format('DD/MM/yyyy HH:mm')

const table = (props) => {
  const buttonAction = (status, id) => {
    const children = status === 'check-in' ? 'Liberar' : 'Detalhes'
    const actionButton = status === 'check-in' ? props.release : props.detail
    const outline = status === 'check-in' ? false : true
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
        {/* <InputSearch
          name="pesquisa"
          onChange={props.search}
          type="text"
          placeholder="Pesquisar"
        /> */}
      </div>
      <table className={Style.table}>
        <thead>
         <tr>
          <th>Frota</th>
          <th>Placa</th>
          <th>Data Entrada</th>
          <th>Data Saída</th>
          <th>Evento</th>
          <th>Operação</th>
          <th>Permanência</th>
          <th />
         </tr>
        </thead>
        <tbody>
          {props.data.map((item) => (
            <tr key={item._id} >
              <td>{item.fleet}</td>
              <td>{item.plate}</td>
              <td>{formattedDate(item.createdAt)}</td>
              <td>{formattedDate(item.updatedAt)}</td>
              <td>{item.reason}</td>
              <td>{item.operation}</td>
              <td>{diffTime(item.createdAt, item.updatedAt, item.status)}</td>
              <td>{buttonAction(item.status, item._id)}</td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default table
