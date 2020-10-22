import React from 'react'
import Details from './Containers/Details'

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
    <Details  details={details}
      // placa="DSG2100"
      // driverRelease="Thiago Ramalho de Souza"
      // driverExit="Alexandre dos Santos Soares"
      // event="Corretiva"
      // eventExit="Liberado"
      // dateRelease="01/10/2020 às 08:00"
      // dateExit="02/10/2020 às 10:00"
      // viewSignatureRelease={console.log('Assinatura entrada')}
      // viewSignatureExit={console.log('Assinatura saída')}
    />
  )
}

export default App
