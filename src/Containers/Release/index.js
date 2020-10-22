import React from 'react'
import { Button, Card, Header, Input } from '../../Components/'
import Style from './style.module.css'

const Release = (props) => {
  return (
    <div className={Style.container}>
      <Header />
      <Card>
        <h1>Liberar implemento</h1>
        <p>Adicione as informações do motorista!</p>
      </Card>

      <Card>
        <h1>informações Gerais</h1>
        <div className={Style.informationAll}>
          <div>
            <h5>Placa</h5>
            <p>{props.checkin.plate}</p>
          </div>
          <div>
            <h5>Evento</h5>
            <p>{props.checkin.event}</p>
          </div>
          <div>
            <h5>Data</h5>
            <p>{props.checkin.createdAt}</p>
          </div>
        </div>
        <Input 
          label="Mototista"
          type="text" 
          name="motorista"
          id="textMotorista"
          onChange={props.driver}
        />
      </Card>

      <Button
        action={props.release}
      >
        Liberar implemento
      </Button>
      
    </div>
  )
}

export default Release
