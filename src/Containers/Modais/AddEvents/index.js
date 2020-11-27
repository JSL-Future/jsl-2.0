import React from 'react'
import { Button, Input,SelectOption } from '../../../Components'
import Style from './style.module.css'

const AddEvents = ({
  handleSave,
  form,
  formErrors,
  handleOnChange,
  HandleBlur,
}) => {

  const dataListEvent = [
    { name: 'Selecione um evento', value: '', hidden: true, disabled: false },
    { name: 'Doca', value: 'doca', hidden: false, disabled: false },
    { name: 'Aguardando Peças', value: 'aguardando_pecas', hidden: false, disabled: false },
    { name: 'Pátio', value: 'patio', hidden: false, disabled: false },
    { name: 'Lavar', value: 'lavar', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Adicione um evento!
          </h1>
          <p className={Style.description}>
            Todos as atividades são criadas com o evento <b>“Check-in”</b>, mas vocês podem alterar por uma das opções abaixo:
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Evento"
            selectValue={form.event}
            selectName="status"
            onchange={handleOnChange}
            options={dataListEvent}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.inputResponsible}>
          <Input
            value={form.responsible}
            label="Responsável"
            type="text"
            name="responsible"
            id="textresponsible"
            onchange={handleOnChange}
            onblur={HandleBlur}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.buttonSave}>
          <Button action={handleSave}>
            Salvar evento
          </Button>
        </div>
      </div>
    </div>
  )
}

export default AddEvents
