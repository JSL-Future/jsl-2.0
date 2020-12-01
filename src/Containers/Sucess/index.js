import React from 'react'
import { withRouter } from 'react-router-dom'

import { Button } from '../../Components'
import SucessIcon from './sucess-icon.svg'
import Style from './style.module.css'

const Sucess = ({
  history,
  actionText,
  action,
  title,
  message,
}) => {

  const goHome = () => {
    history.push('/manager')
  }

  return (
    <div className={Style.container}>
      <div className={Style.content}>
        <div>
          <h1 className={Style.title}>
            {title}
          </h1>
          <p className={Style.description}>
            {message}
          </p>
        </div>
        <div className={Style.sucess}>
          <img src={SucessIcon} alt="icon-sucess" />
          <h1>Sucesso!</h1>
        </div>
        <div className={Style.button}>
          <Button action={action}>
            {actionText}
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

export default withRouter(Sucess)
