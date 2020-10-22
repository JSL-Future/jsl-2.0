import React from 'react'
import Signature from './Containes/Signature'

const App = () => {

  const checkin = {
    plate: 'DSG2100',
    driver: 'Thiago Ramalho de Souza',
    event: 'Corretiva',
    createdAt: '02/10/2020 às 08:00',
    updatedAt: ''
  }

  return (
    <Signature checkin={checkin} />
  )
}

export default App
