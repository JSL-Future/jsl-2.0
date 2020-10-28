import React from 'react'
import { withRouter } from 'react-router-dom'
import ManagerContainer from '../../Containers/Manager'

const Manager = (props) => {

  const data = [
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Preventiva" , permanence: "80 horas", preventiva: "preventiva", corretiva: false, estacionamento: false},
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Corretiva" , permanence: "80 horas", preventiva: false, corretiva: true, estacionamento: false},
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Estacionamento" , permanence: "80 horas", preventiva: false, corretiva: false, estacionamento: true},
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Preventiva" , permanence: "80 horas", preventiva: true, corretiva: false, estacionamento: false},
  ]

  const goToCreateImplements = () => {
    return props.history.push('/create')
  }

  return (
    <ManagerContainer data={data} addImplement={goToCreateImplements}/>
  )
}

export default withRouter(Manager)
