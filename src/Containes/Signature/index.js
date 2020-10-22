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
        <div>
          <h5>Placa</h5>
          <p></p>
        </div>

        <div>
          <h5>Motorista</h5>
          <p></p>
        </div>

        <div>
          <h5>Evento</h5>
          <p></p>
        </div>

        <div>
          <h5>Data Entrada</h5>
          <p></p>
        </div>
      </Card>
      
      <Card>
        <h2>Assinatura</h2>
        <p></p>
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
