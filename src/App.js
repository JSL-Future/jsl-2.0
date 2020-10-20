import React from 'react'
import Details from './Containers/Details'

const App = () => {
  return (
    <Details 
      placa="DSG2100"
      driverRelease="Thiago Ramalho de Souza"
      driverExit="Alexandre dos Santos Soares"
      event="Corretiva"
      eventExit="Liberado"
      dateRelease="01/10/2020 às 08:00"
      dateExit="02/10/2020 às 10:00"
      viewSignatureRelease={console.log('Assinatura entrada')}
      viewSignatureExit={console.log('Assinatura saída')}
    />
  )
}

export default App
