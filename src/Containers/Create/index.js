import React from 'react'
import { Card, Header, SelectOption } from '../../Components'
import style from './style.module.css'

const createEntry = () => {
  const listSelect = [
    {value: "", hidden: true, disabled: false, name: "Selecione uma opção"},
    {value: "0", hidden: false, disabled: false, name: "Preventiva"},
    {value: "1", hidden: false, disabled: false, name: "Corretiva"},
    {value: "2", hidden: false, disabled: false, name: "Estacionamento"},
  ]
  
  return(
    <div className={style.container}>
      <Header />
      <Card>
        <h1>Adicionando Implementos</h1>
        <p>Para adicionar novos implementos preencha as informações abaixo:</p>
      </Card>
      <Card>
        <SelectOption option={listSelect}/>
      </Card>
    </div>
  )
}

export default createEntry
