import React from 'react'
import { Button, Input,SelectOption } from '../../Components'
import ClosedIcon from './closed.svg'
import Style from './style.module.css'

const AddEvents = (
  form,
  onChange,
  onBlur,
) => {

  const dataListEvent = [
    { name: 'Selecione um evento', value: '', hidden: true, disabled: false },
    { name: 'Alta', value: 'alta', hidden: false, disabled: false },
    { name: 'Normal', value: 'normal', hidden: false, disabled: false },
    { name: 'Baixa', value: 'baixa', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.closed}>
        <button className={Style.closedBtn} onClick={() => { }}>
          <img src={ClosedIcon} alt="closed" />
        </button>
      </div>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Adicione um evento!
          </h1>
          <p className={Style.description}>
          Todos as atividades são criadas com o evento<br/><b>“Check-in”</b>, mas vocês podem alterar por uma das opções abaixo:
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Evento"
            selectValue={form.event}
            selectName="event"
            onchange={onChange}
            options={dataListEvent}
          />
        </div>
        <div className={Style.inputResponsible}>
          <Input
            value={form.responsible}
            label="Responsável"
            type="text"
            name="responsible"
            id="textresponsible"
            onchange={onChange}
            onblur={onBlur}
          />
        </div>
        <div className={Style.buttonSave}>
          <Button
            action={() => { }}
          >
            Salvar evento
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddEvents
