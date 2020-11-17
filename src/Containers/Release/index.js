import React from 'react'
import moment from 'moment'
import {
  Button,
  Card,
  Header,
  Input,
} from '../../Components/'
import Style from './style.module.css'

const formattedDate = date => moment(date).format('DD/MM/yyyy HH:mm')

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
            <h5>Frota</h5>
            <p>{props.implement.fleet}</p>
          </div>
          <div>
            <h5>Placa</h5>
            <p>{props.implement.plate}</p>
          </div>
          <div>
            <h5>Motivo</h5>
            <p>{props.implement.reason}</p>
          </div>
          <div>
            <h5>Data Entrada</h5>
            <p>{formattedDate(props.implement.createdAt)}</p>
          </div>
        </div>
        <Input
          value={props.form.driver}
          label="Mototista"
          type="text"
          name="responsible"
          id="textDriver"
          onchange={props.onChange}
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
