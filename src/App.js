import React from 'react'
import Release from './Containers/Release'

const App = () => {

  const checkin = {
    plate: "DSG2100",
    event: "Corretiva",
    createdAt: "02/10/2020 às 08:00",
    updatedAt: ""
  }

  return (
    <Release checkin={checkin} />
  )
}

export default App
