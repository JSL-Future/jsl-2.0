import React from 'react'

import { Button } from '../../Components'
import ErrorIcon from './error-icon.svg'
import Style from './style.module.css'

const Error = ({
  again,
  title,
  message,
  actionText,
}) => {
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
        <div className={Style.error}>
          <img src={ErrorIcon} alt="error-icon" />
          <h1>Erro!</h1>
        </div>
        <div className={Style.button}>
          <Button
            action={again}
            outline
          >
            { actionText || 'Tentar novamente' }
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Error
