import React from 'react'
import { Button, Card, Header } from '../../Components'
import Style from './style.module.css'

const Details = (props) => {
  return (
    <div className={Style.container}>
      <Header />
      <Card>
        <h1>Detalhes do Implemento</h1>
        <p>Aqui você tem acesso as informações</p>
        <p>de entrada e saída do implemnto</p>
      </Card>
      
      <Card>
        <h1>Detalhes do implemento</h1>
        <div className={Style.cardDetails}> 
          <div>
            <h5>Placa</h5>
            <p>{props.placa}</p>
            <h5>Placa</h5>
            <p>{props.placa}</p>
          </div>

          <div>
            <h5>Motorista</h5>
            <p>{props.driverRelease}</p>
            <h5>Motorista</h5>
            <p>{props.driverExit}</p>
          </div>

          <div>
            <h5>Evento</h5>
            <p>{props.event}</p>
            <h5>Evento</h5>
            <p>{props.eventExit}</p>
          </div>

          <div>
            <h5>Data Entrada</h5>
            <p>{props.dateRelease}</p>
            <h5>Data Saída</h5>
            <p>{props.dateExit}</p>
          </div>
      
          <div className={Style.button}>
            <h5>Assinatura</h5>
            <Button
              action={props.viewSignatureRelease}
              outline
            >
              ver
            </Button>

            <h5>Assinatura</h5>
            <Button
              action={props.viewSignatureExit}
              outline
            >
              ver
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Details
