import React from 'react'
import { Button, Card, Header, Input } from '../../Components/'
import Style from './style.module.css'

const Release = () => {
  return (
    <div className={Style.container}>
      <Header />
      <Card>
        <h1>Liberar implemento</h1>
        <p>Adicione as informações do motorista</p>
      </Card>

      <Card>
        <h1>informações Gerais</h1>
        <div className={Style.informationAll}>
          <div>
            <p>Placa</p>
            <h1>DSG2100</h1>
          </div>
          <div>
            <p>Evento</p>
            <h1>Corretiva</h1>
          </div>
          <div>
            <p>Data</p>
            <h1>02/10/2020 às 08:00</h1>
          </div>
        </div>
        <Input 
          label="Mototista"
          type="text" 
          name="motorista"
          id="textMotorista"
          onChange=""
        />
      </Card>

      <Button>
        Liberar implemento
      </Button>
      
    </div>
  )
}

export default Release
