import React from 'react'
import { Button, SelectOption } from '../../../Components'
import Style from './style.module.css'

const Priority = ({
  handleSave,
  form,
  handleOnChange,
  formErrors,
}) => {

  const dataListPriority = [
    { name: 'Selecione uma prioridade', value: null, hidden: true, disabled: false },
    { name: 'Alta', value: 'high', hidden: false, disabled: false },
    { name: 'Normal', value: 'medium', hidden: false, disabled: false },
    { name: 'Baixa', value: 'low', hidden: false, disabled: false },
  ]

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Editar Prioridade!
          </h1>
          <p className={Style.description}>
            Todos as atividades são criadas com a prioridade <b>“Normal”</b>, mas vocês pode alterar por uma das opções abaixo:
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Prioridades"
            selectValue={form.priority}
            selectName="priority"
            onchange={handleOnChange}
            options={dataListPriority}
            formErrors={formErrors}
          />
        </div>
        <div className={Style.buttonSave}>
          <Button action={handleSave}>
            Alterar prioridade
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Priority
