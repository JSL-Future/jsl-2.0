import React from 'react'
import { Button, Input, InputMasked, SelectOption } from '../../Components'
import GoBackIcon from './arrowBack.svg'

import Style from './style.module.css'

const createEntry = ({
  form,
  onChange,
  handleSave,
  goBack,
  HandleBlur,
  formErrors,
}) => {

  const dataListService = [
    { name: 'Selecione um serviço', value: '', hidden: true, disabled: false },
    { name: 'Corretiva', value: 'Corretiva', hidden: false, disabled: false },
    { name: 'Preventiva', value: 'Preventiva', hidden: false, disabled: false },
    { name: 'Abastecer', value: 'Abastecer', hidden: false, disabled: false },
    { name: 'Estacionar', value: 'Estacionar', hidden: false, disabled: false },
    { name: 'Lavar', value: 'Lavar', hidden: false, disabled: false },
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
        <button className={Style.closedBtn} onClick={goBack}>
          <img src={GoBackIcon} alt="go back" />
        </button>
      </div>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Criar novo acesso!
          </h1>
          <p className={Style.description}>
            Selecione o tipo de atividade que deseja registrar.
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Serviços"
            selectValue={form.service}
            selectName="reason"
            onchange={onChange}
            options={dataListService}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Operação"
            selectValue={form.operations}
            selectName="operation"
            onchange={onChange}
            options={dataListOper}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.twoInputLine}>
          <div className={Style.inputSize}>
            <Input
              value={form.fleet}
              label="Frota"
              type="text"
              name="fleet"
              id="textfleet"
              onchange={onChange}
              onblur={HandleBlur}
              formErrors={formErrors}
            />
          </div>
          <div className={Style.inputSize}>
            <Input
              value={form.plate}
              label="Placa"
              type="text"
              name="plate"
              id="textPlate"
              onchange={onChange}
              onblur={HandleBlur}
              formErrors={formErrors}
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
          onblur={HandleBlur}
          formErrors={formErrors}
        />
        <div className={Style.buttonSave}>
          <Button action={handleSave}>
            Salvar
          </Button>
        </div>
      </div>
    </div >
  )
}

export default createEntry
