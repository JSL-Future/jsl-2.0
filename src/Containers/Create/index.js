import React from 'react'
import { Button, Card, Header, Input, SelectOption } from '../../Components'
import Style from './style.module.css'

const createEntry = (props) => {  
  return(
    <div className={Style.container}>
      <Header />
      
      <Card>
        <h1>Adicionando Implementos</h1>
        <p>Para adicionar novos implementos preencha</p>
        <p>as informações abaixo:</p>
      </Card>
      
      <Card>
        <h1>Operação</h1>
        <SelectOption 
          onChange={props.onChange} 
          options={props.dataListOper} 
        />
      </Card>
      
      <Card>
        <h1>Evento</h1>
        <SelectOption  
          onChange={props.onChange} 
          options={props.dataListEvent} 
        />
      </Card>
      
      <Card>
        <h1>Informações Gerais</h1>
        <Input 
          label="Placa"
          type="text"
          name="plate"
          id="textPlate"
          onChange={props.onChange}
        />
        <Input 
          label="Motorista"
          type="text"
          name="driver"
          id="textDriver"
          onChange={props.onChange}
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
