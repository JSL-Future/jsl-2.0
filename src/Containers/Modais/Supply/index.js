import React from 'react'
import { Button, Input, SelectOption } from '../../../Components'
import Style from './style.module.css'

const Supply = ({
  handleSave,
  form,
  formErrors,
  handleOnChange,
  HandleBlur,
}) => {

  const dataListFuel = [
    { name: 'Selecione um combustível', value: '', hidden: true, disabled: false },
    { name: 'Diesel S-10', value: 'diesel_s10', hidden: false, disabled: false },
    { name: 'Arla', value: 'arla', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Iniciar abastecimento!
          </h1>
          <p className={Style.description}>
            Todos as atividades  criadas com o tipo de evento <b>“Abastecer”</b>,  precisa ser adicionada algumas informações como <b>km, total de litros abastecido, Hodometro e Matrícula do motorista.</b>
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Combustível"
            selectValue={form.fuel}
            selectName="fuel"
            onchange={handleOnChange}
            options={dataListFuel}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.inputLiters}>
          <Input
            value={form.totalLiters}
            label="Total de litros"
            type="number"
            name="totalLiters"
            id="texttotalLiters"
            onchange={handleOnChange}
            onblur={HandleBlur}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.twoInputLine}>
          <div className={Style.inputSize}>
            <Input
              value={form.fleet}
              label="Quilometragem"
              type="number"
              name="mileage"
              id="textmileage"
              onchange={handleOnChange}
              onblur={HandleBlur}
              formErrors={formErrors}
            />
          </div>
          <div className={Style.inputSize}>
            <Input
              value={form.pedometer}
              label="Hodômetro"
              type="number"
              name="pedometer"
              id="textPedometer"
              onchange={handleOnChange}
              onblur={HandleBlur}
              formErrors={formErrors}
            />
          </div>
        </div>
        <Input
          value={form.registrationDriver}
          label="Matrícula Motorista"
          type="text"
          name="registrationDriver"
          id="textregistrationDriver"
          onchange={handleOnChange}
          onblur={HandleBlur}
          formErrors={formErrors}
        />
        <div className={Style.buttonSave}>
          <Button action={handleSave}>
            Salvar abastecimento
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Supply
