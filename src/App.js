import React from 'react'
import Manager from './Containers/Manager'

const App = () => {

  const data = [
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Preventiva" , permanence: "80 horas", preventiva: "preventiva", corretiva: false, estacionamento: false},
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Corretiva" , permanence: "80 horas", preventiva: false, corretiva: true, estacionamento: false},
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Estacionamento" , permanence: "80 horas", preventiva: false, corretiva: false, estacionamento: true},
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Preventiva" , permanence: "80 horas", preventiva: true, corretiva: false, estacionamento: false},
  ]

  return (
    <Manager data={data} dataLength={data.length}/>
  )
}

export default App
