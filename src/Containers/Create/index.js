import React from 'react'
import { Button, Input, SelectOption, Loading } from '../../Components'
import GoBackIcon from './arrowBack.svg'
import {
  dataListOper,
  dataListService,
} from '../../utils/common'

import Style from './style.module.css'

const createEntry = ({
  form,
  onChange,
  handleSave,
  goBack,
  HandleBlur,
  formErrors,
  loading,
}) => {

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
        {loading && (
          <div className={Style.load}>
            <Loading />
          </div>
        )}
        {!loading && (
          <div className={Style.buttonSave}>
            <Button action={handleSave}>
              Salvar
            </Button>
          </div>
        )}

      </div>
    </div >
  )
}

export default createEntry
