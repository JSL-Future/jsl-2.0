import React from 'react'
import { Button, Card, Header, Input, SelectOption } from '../../Components'
import style from './style.module.css'

const createEntry = (props) => {  
  return(
    <div className={style.container}>
      <Header />
      
      <Card>
        <h1>Adicionando Implementos</h1>
        <p>Para adicionar novos implementos preencha</p>
        <p>as informações abaixo:</p>
      </Card>
      
      <Card>
        <h1>Operação</h1>
        <SelectOption options={props.dataListOper} />
      </Card>
      
      <Card>
        <h1>Evento</h1>
        <SelectOption options={props.dataListEvent} />
      </Card>
      
      <Card>
        <h1>Informações Gerais</h1>
        <Input 
          label="Placa"
          type="text"
          name="placa"
          id="textPlaca"
          onChange=""
        />
        <Input 
          label="Motorista"
          type="text"
          name="motorista"
          id="textMotorista"
          onChange=""
        />
      </Card>

      <Button
        action={props.save}
      >
        Salvar
      </Button>

    </div>
  )
}

export default createEntry
