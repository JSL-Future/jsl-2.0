import React from 'react'
import Manager from './Containers/Manager'

const App = () => {

  const data = [
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Preventiva" },
    {placa: "DSG2100", date: "03/11/1990 às 08:00", event: "Preventiva" },
  ]

  return (
    <Manager data={data} dataLength={data.length}/>
  )
}

export default App
