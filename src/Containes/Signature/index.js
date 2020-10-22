import React from 'react'
import { Button, Card, Header } from '../../Components/index'
import Style from './style.module.css'

const Signature = (props) => {
  return (
    <div className={Style.container}>
      <Header />
      
      <Card>
        <h1>Adicionar Assinatura</h1>
        <p>Verifique as informações inseridas e</p>
        <p>peça para o motorista assinar!</p>
      </Card>

      <Card>
        <h3>Detalhes do implemento</h3>
        <div className={Style.cardDetails}>
          <div>
            <h5>Placa</h5>
            <p>{props.details.plate}</p>
          </div>

          <div>
            <h5>Motorista</h5>
            <p>{props.details.driver}</p>
          </div>

          <div>
            <h5>Evento</h5>
            <p>{props.details.event}</p>
          </div>

          <div>
            <h5>Data Entrada</h5>
            <p>{props.details.createdAt}</p>
          </div>
        </div>
      </Card>
      
      <Card>
        <div className={Style.cardSignature}>
          <h1>Assinatura</h1>
          <div className={Style.signature}>
          </div>
          <p>{props.details.driver}</p>
        </div>
      </Card>

      <Button
        action={props.saveSignature}
      >
        Adicionar Assinatura
      </Button>
    </div>
  )
}

export default Signature
