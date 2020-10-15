import React from 'react'
import { Button, Card, Header, Input, SelectOption } from '../../Components'
import style from './style.module.css'

const createEntry = () => {
  const listSelectEvent = [
    {value: "", hidden: true, disabled: false, name: "Selecione uma opção"},
    {value: "0", hidden: false, disabled: false, name: "Preventiva"},
    {value: "1", hidden: false, disabled: false, name: "Corretiva"},
    {value: "2", hidden: false, disabled: false, name: "Estacionamento"},
  ]

  const listSelectOper = [
    {value: "", hidden: true, disabled: false, name: "Selecione uma opção"},
    {value: "0", hidden: false, disabled: false, name: "Mercedes-Benz"},
    {value: "1", hidden: false, disabled: false, name: "Ford Motor"},
    {value: "2", hidden: false, disabled: false, name: "GM Interplantas"},
    {value: "2", hidden: false, disabled: false, name: "GM Cegonha"},
    {value: "2", hidden: false, disabled: false, name: "Lear Corporation"},
  ]
  
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
        <SelectOption options={listSelectOper} />
      </Card>
      
      <Card>
        <h1>Evento</h1>
        <SelectOption options={listSelectEvent} />
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

      <Button>Salvar</Button>

    </div>
  )
}

export default createEntry
