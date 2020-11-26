import React from 'react'
import { Button, Input, SelectOption } from '../../Components'
import Closed from './closed.svg'
import Style from './style.module.css'

const Supply = (
  form,
  onChange,
  onBlur
) => {

  const dataListFuel = [
    { name: 'Selecione um combustível', value: '', hidden: true, disabled: false },
    { name: 'Diesel S-10', value: 'corretiva', hidden: false, disabled: false },
    { name: 'Arla', value: 'corretiva', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.goBack}>
        <button className={Style.goBackBtn} onClick={() => { }}>
          <img src={Closed} alt="go back" />
        </button>
      </div>
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
            onchange={onChange}
            options={dataListFuel}
          />
        </div>
        <div className={Style.inputLiters}>
          <Input
            value={form.totalLiters}
            label="Total de litros"
            type="number"
            name="totalLiters"
            id="texttotalLiters"
            onchange={onChange}
            onblur={onBlur}
          />
        </div>
        <div className={Style.twoInputLine}>
          <div className={Style.inputMileage}>
            <Input
              value={form.fleet}
              label="Quilometragem"
              type="number"
              name="mileage"
              id="textmileage"
              onchange={onChange}
              onblur={onBlur}
            />
          </div>
          <div className={Style.inputPlate}>
            <Input
              value={form.pedometer}
              label="Hodômetro"
              type="number"
              name="pedometer"
              id="textPedometer"
              onchange={onChange}
            />
          </div>
        </div>
        <Input
          value={form.registrationDriver}
          label="Matrícula Motorista"
          type="text"
          name="registrationDriver"
          id="textregistrationDriver"
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
    </div>
  )
}

export default Supply
