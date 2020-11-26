import React from 'react'
import { Button, SelectOption } from '../../Components'
import ClosedIcon from './closed.svg'
import Style from './style.module.css'

const Priority = (
  form,
  onChange,
) => {

  const dataListPriority = [
    { name: 'Selecione uma prioridade', value: '', hidden: true, disabled: false },
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
            Editar Prioridade!
          </h1>
          <p className={Style.description}>
            Todos as atividades são criadas com a prioridade <b>“Normal”</b>, mas vocês pode alterar por uma das<br/> opções abaixo:
          </p>
        </div>
        <div className={Style.selectOption}>
          <SelectOption
            label="Prioridades"
            selectValue={form.priority}
            selectName="priority"
            onchange={onChange}
            options={dataListPriority}
          />
        </div>
        <div className={Style.buttonSave}>
          <Button
            action={() => { }}
          >
            Alterar prioridade
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Priority
