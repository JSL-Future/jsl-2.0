import React from 'react'
import { Button, Input, InputMasked, SelectOption } from '../../Components'
import GoBackIcon from './arrowBack.svg'

import Style from './style.module.css'

const createEntry = ({
  form,
  onChange,
  onBlur,
  save,
}) => {

  const dataListService = [
    { name: 'Selecione um serviço', value: '', hidden: true, disabled: false },
    { name: 'Corretiva', value: 'corretiva', hidden: false, disabled: false },
    { name: 'Preventiva', value: 'preventiva', hidden: false, disabled: false },
    { name: 'Abastecer', value: 'abastecer', hidden: false, disabled: false },
    { name: 'Estacionar', value: 'estacionar', hidden: false, disabled: false },
    { name: 'Lavar', value: 'lavar', hidden: false, disabled: false },
  ]

  const dataListOper = [
    { name: 'Selecione uma operação', value: '', hidden: true, disabled: false },
    { name: 'Mercedes-Benz', value: 'Mercedes', hidden: false, disabled: false },
    { name: 'Ford Motor', value: 'Ford', hidden: false, disabled: false },
    { name: 'Scania do Brasil', value: 'Scania', hidden: false, disabled: false },
    { name: 'Lear Corporation', value: 'lear', hidden: false, disabled: false },
    { name: 'Renault do Brasil', value: 'renault', hidden: false, disabled: false },
    { name: 'Whirlpool', value: 'whirlpool', hidden: false, disabled: false },
    { name: 'GM Interplantas', value: 'gmIinterplatas', hidden: false, disabled: false },
    { name: 'GM Cegonha', value: 'gmCegonha', hidden: false, disabled: false},
    { name: 'Volkswagem', value: 'volkswagem', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.closed}>
        <button className={Style.closedBtn} onClick={() => { }}>
          <img src={GoBackIcon} alt="go back" />
        </button>
      </div>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Criar novo acesso!
          </h1>
          <p className={Style.description}>
            Selecione o tipo de atividade que<br />deseja registrar.
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Serviços"
            selectValue={form.service}
            selectName="service"
            onchange={onChange}
            options={dataListService}
          />
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Operação"
            selectValue={form.operations}
            selectName="operation"
            onchange={onChange}
            options={dataListOper}
          />
        </div>
        <div className={Style.twoInputLine}>
          <div className={Style.inputFleet}>
            <Input
              value={form.fleet}
              label="Frota"
              type="text"
              name="fleet"
              id="textfleet"
              onchange={onChange}
              onblur={onBlur}
            />
          </div>
          <div className={Style.inputPlate}>
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
          </div>
        </div>
        <Input
          value={form.driver}
          label="Motorista"
          type="text"
          name="responsible"
          id="textDriver"
          onchange={onChange}
        />
        <div className={Style.buttonSave}>
          <Button
            action={() => { }}
          >
            Salvar
          </Button>
        </div>
      </div>
    </div >
  )
}

export default createEntry
