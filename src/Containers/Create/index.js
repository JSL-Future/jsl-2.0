import React from 'react'
import { Button,Input, InputMasked, SelectOption } from '../../Components'
import ClosedIcon from './closed.svg'  

import Style from './style.module.css'

const createEntry = ({
  form,
  onChange,
  onBlur,
  save,
}) => {

  const dataListOper = [
    { name: 'Selecione uma opção', value: '', hidden: true, disabled: false },
    { name: 'Mercedes', value: 'Mercedes', hidden: false, disabled: false },
    { name: 'Ford', value: 'Ford', hidden: false, disabled: false },
    { name: 'Scania', value: 'Scania', hidden: false, disabled: false },
  ]

  const dataListService = [
    { name: 'Selecione uma opção', value: '', hidden: true, disabled: false },
    { name: 'Abastecer', value: 'Mercedes', hidden: false, disabled: false },
    { name: 'Ford', value: 'Ford', hidden: false, disabled: false },
    { name: 'Scania', value: 'Scania', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.closed}>
        <button  className={Style.closedBtn} onClick={()=>{}}>
          <img src={ClosedIcon} alt="closed" />
        </button>
      </div>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Criar novo acesso!
          </h1>
          <p className={Style.description}>
            Selecione o tipo de atividade que<br/>deseja registrar.
          </p>
        </div>
        <SelectOption
          label="Serviços"
          selectValue={form.service}
          selectName="service"
          onchange={onChange}
          options={dataListService}
        />
        <SelectOption
          label="Operação"
          selectValue={form.operations}
          selectName="operation"
          onchange={onChange}
          options={dataListOper}
        />
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
            action={()=>{}}
          >
            Salvar
          </Button>
        </div>
      </div>
    </div>
  )
}

export default createEntry
