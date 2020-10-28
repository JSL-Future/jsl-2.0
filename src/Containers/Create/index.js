import React from 'react'
import { Button, Card, Header, Input, SelectOption } from '../../Components'
import Style from './style.module.css'

const createEntry = (props) => {  

  const dataListOper = [
    {name: 'Selecione uma opção', value: '', hidden: true, disabled: true},
    {name: 'Mercedes', value:'Mercedes', hidden: false, disabled: false},
    {name: 'Ford', value: 'Ford', hidden: false, disabled: false},
    {name: 'Scania', value: 'Scania', hidden: false, disabled: false},
  ]

  const dataListEvent = [
    {name: 'Selecione uma opção', value: '', hidden: true, disabled: false},
    {name: 'Corretiva', value: 'Corretiva', hidden: false, disabled: false},
    {name: 'Preventiva', value: 'Preventiva', hidden: false, disabled: false},
    {name: 'Estacionamento', value: 'Estacionamento', hidden: false, disabled: false},
  ]

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
          selectValue={props.form.operacao}
          selectName="operacao"
          onchange={props.onChange} 
          options={dataListOper} 
        />
      </Card>
      
      <Card>
        <h1>Evento</h1>
        <SelectOption  
          selectValue={props.form.event}
          selectName="event"
          onchange={props.onChange} 
          options={dataListEvent} 
        />
      </Card>
      
      <Card>
        <h1>Informações Gerais</h1>
        <Input 
          value={props.form.plate}
          label="Placa"
          type="text"
          name="plate"
          id="textPlate"
          onchange={props.onChange}
        />
        <Input 
          value={props.form.driver}
          label="Motorista"
          type="text"
          name="driver"
          id="textDriver"
          onchange={props.onChange}
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
