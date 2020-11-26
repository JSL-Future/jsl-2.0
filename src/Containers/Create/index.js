import React from 'react'
import { Button, Card, Header, Input, InputMasked, SelectOption } from '../../Components'
import Style from './style.module.css'

const createEntry = ({
  form,
  onChange,
  onBlur,
  save,
}) => {

  const dataListOper = [
    { name: 'Selecione uma opção', value: '', hidden: true, disabled: false },
    { name: 'Mercedes', value:'Mercedes', hidden: false, disabled: false },
    { name: 'Ford', value: 'Ford', hidden: false, disabled: false },
    { name: 'Scania', value: 'Scania', hidden: false, disabled: false },
  ]

  const dataListEvent = [
    { name: 'Selecione uma opção', value: '', hidden: true, disabled: false },
    { name: 'Corretiva', value: 'Corretiva', hidden: false, disabled: false },
    { name: 'Preventiva', value: 'Preventiva', hidden: false, disabled: false },
    { name: 'Estacionamento', value: 'Estacionamento', hidden: false, disabled: false },
    { name: 'Abastecer', value: 'Preventiva', hidden: false, disabled: false },
    { name: 'Lavar', value: 'Estacionamento', hidden: false, disabled: false },
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
          selectValue={form.operations}
          selectName="operation"
          onchange={onChange}
          options={dataListOper}
        />
      </Card>

      <Card>
        <h1>Evento</h1>
        <SelectOption
          selectValue={form.event}
          selectName="reason"
          onchange={onChange}
          options={dataListEvent}
        />
      </Card>

      <Card>
        <h1>Informações Gerais</h1>
        <Input
          value={form.fleet}
          label="Frota"
          type="text"
          name="fleet"
          id="textfleet"
          onchange={onChange}
          onblur={onBlur}
        />
        <InputMasked
          value={form.plate}
          label="Placa"
          type="text"
          name="plate"
          id="textPlate"
          onchange={onChange}
          mask={[
            /[A-Z]/,
            /[A-Z]/,
            /[A-Z]/,
            "-",
            /[0-9]/,
            /[0-9A-Z]/,
            /[0-9]/,
            /[0-9]/
          ]}
          guide={false}
        />
        <Input
          value={form.driver}
          label="Motorista"
          type="text"
          name="responsible"
          id="textDriver"
          onchange={onChange}
        />
      </Card>

      <Button
        action={save}
      >
        Salvar
      </Button>
    </div>
  )
}

export default createEntry
