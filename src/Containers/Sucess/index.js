import React from 'react'
import { Button } from '../../Components'
import SucessIcon from './sucess-icon.svg'
import Style from './style.module.css'

const Sucess = (
  addImplement,
  goHome
) => {
  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            Acesso criado com sucesso!
          </h1>
          <p className={Style.description}>
            Acesso registrado clique em <b>“Home”</b> para navegar<br /> para  a tela inicial ou clique em <b>“Novo”</b><br /> para adicionar um novo acesso!
          </p>
        </div>
        <div className={Style.sucess}>
          <img src={SucessIcon} alt="icon-sucess" />
          <h1>Sucesso!</h1>
        </div>
        <div className={Style.button}>
          <Button
            action={addImplement}
          >
            Novo
          </Button>
        </div>
        <div className={Style.button}>
          <Button
            action={goHome}
            outline
          >
            Home
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Sucess
