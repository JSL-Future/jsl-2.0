import React from 'react'
import { Card, Header } from '../../Components'
import Style from './style.module.css'

const Details = () => {
  return (
    <div>
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
            <p>Placa</p>
            <h1>DSG2100</h1>
            <p>Placa</p>
            <h1>DSG2100</h1>
          </div>

          <div>
            <p>Motorista</p>
            <h1>Thiago Ramalho de Souza</h1>
            <p>Motorista</p>
            <h1>Alexandre Soares</h1>
          </div>

          <div>
            <p>Evento</p>
            <h1>Corretiva</h1>
            <p>Evento</p>
            <h1>Liberado</h1>
          </div>

          <div>
            <p>Data Entrada</p>
            <h1>02/10/2020 às 08:00</h1>
            <p>Data Saída</p>
            <h1>02/10/2020 às 08:00</h1>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default Details
