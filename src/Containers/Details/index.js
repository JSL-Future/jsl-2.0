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
        <p>de entrada e saída do implemento</p>
      </Card>
      
      <Card>
        <h4>Detalhes do implemento</h4>
        <div className={Style.cardDetails}> 
          <div>
            <h5>Placa</h5>
            <p>{props.details.plate}</p>
            <h5>Placa</h5>
            <p>{props.details.plate}</p>
          </div>

          <div>
            <h5>Motorista</h5>
            <p>{props.details.checkin.driver}</p>
            <h5>Motorista</h5>
            <p>{props.details.checkout.driver}</p>
          </div>

          <div>
            <h5>Evento</h5>
            <p>{props.details.checkin.event}</p>
            <h5>Evento</h5>
            <p>{props.details.checkout.event}</p>
          </div>

          <div>
            <h5>Data Entrada</h5>
            <p>{props.details.checkin.createdAt}</p>
            <h5>Data Saída</h5>
            <p>{props.details.checkout.createdAt}</p>
          </div>
      
          <div className={Style.button}>
            <h5>Assinatura</h5>
            <Button
              action={props.viewSignature}
              outline
            >
              ver
            </Button>

            <h5>Assinatura</h5>
            <Button
              action={props.viewSignature}
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
