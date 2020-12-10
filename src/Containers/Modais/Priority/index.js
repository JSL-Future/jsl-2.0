import React from 'react'
import { Button, SelectOption, Loading } from '../../../Components'
import Style from './style.module.css'
import { dataListPriority } from '../../../utils/common'

const Priority = ({
  handleSave,
  form,
  handleOnChange,
  formErrors,
  modalLoading,
}) => {
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
        {modalLoading && (
          <div className={Style.load}>
            <Loading />
          </div>
        )}
        {!modalLoading && (
           <div className={Style.buttonSave}>
            <Button action={handleSave}>
              Alterar prioridade
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}

export default Priority
