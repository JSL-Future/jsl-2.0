import React from 'react'
import Signature from './Containers/Signature'

const App = () => {

  const details = {
    plate: 'DSG2100',
    checkin: {
      driver: 'Thiago Ramalho de Souza',
      event: 'Corretiva',
      createdAt: '01/10/2020 às 08:00',
      updatedAt: '',
      signature: ''
    },

    checkout: {
      driver: 'Alexandre dos Santos Soares',
      event: 'Liberado',
      createdAt: '02/10/2020 às 10:00',
      updatedAt: '',
      signature: ''
    }
  }

  return (
    <Signature details={details}/>
  )
}

export default App
