import React from 'react'
import { Button } from '../../Components'
import ClosedIcon from './closed.svg'
import Style from './style.module.css'

const Priority = () => {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Acesso do tipo “Corretiva” criado com sucesso!
          </h1>
          <p className={Style.description}>
          Acesso registrado clique em <b>“Home”</b> para navegar<br/> para  a tela inicial ou clique em <b>“Novo”</b><br/> para adicionar um novo acesso!
          </p>
        </div>
        <div className={Style.selectOption}>
          
        </div>
        <div className={Style.buttonSave}>
          <Button
            action={() => { }}
          >
            Novo
          </Button>
        </div>
        <div className={Style.buttonSave}>
          <Button
            action={() => { }}
            outline
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Priority
