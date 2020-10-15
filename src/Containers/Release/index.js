import React from 'react'
import { Button, Card, Header, Input } from '../../Components/'

const Release = () => {
  return (
    <div>
      <Header />
      <Card>
        <h1>Liberar implemento</h1>
        <p>Adicione as informações do motorista</p>
      </Card>
      <Card>
        <h1>informações Gerais</h1>
        <div>
          <h1>Placa</h1>
          <p>DSG2100</p>
        </div>
        <div>
          <h1>Evento</h1>
          <p>Corretiva</p>
        </div>
        <div>
          <h1>Data</h1>
          <p>02/10/2020 às 08:00</p>
        </div>
        <Input 
          label="Mototista"
          type="text" 
          name="motorista"
          id="textMotorista"
          onChange=""
        />
      </Card>
      <Button />
    </div>
  )
}

export default Release
