import React from 'react'
import moment from 'moment'
import { Button, Card, Header } from '../../Components'
import Style from './style.module.css'

const formattedDate = date => moment(date).format('DD/MM/yyyy HH:mm')
// const statusTranslate = status => {
//   const translate = {
//     unavaible: 'Indisponível',
//     release: 'Liberado',
//   }

//   return translate[status]
// }
const Details = (props) => {
  return (
    <div className={Style.container}>
      <Header />
      <Card>
        <div className={Style.cardInfo}>
          <h1>Detalhes do Implemento</h1>
          <p>Aqui você tem acesso as informações</p>
          <p>de entrada e saída do implemento</p>
        </div>
      </Card>

      <Card>
        <h4>Detalhes do implemento</h4>
        <div className={Style.cardDetails}>
          <div className={Style.checkin}>
            <div>
              <h5>Frota</h5>
              <p>{props.data.fleet}</p>
            </div>

            <div>
              <h5>Placa</h5>
              <p>{props.data.plate}</p>
            </div>

            <div>
              <h5>Motivo</h5>
              <p>{props.data.reason}</p>
            </div>

            <div>
              <h5>Data Entrada</h5>
              <p>{formattedDate(props.data.createdAt)}</p>
            </div>

            <div>
              <h5>Data Saída</h5>
              <p>{formattedDate(props.data.updatedAt)}</p>
            </div>
          </div>
        </div>
      </Card>
      <Button action={props.backPage}>
        Voltar
      </Button>
    </div>
  )
}

export default Details
