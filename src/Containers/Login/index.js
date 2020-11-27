import React from 'react'
import Style from './style.module.css'
import { Button, Input } from '../../Components'
import imageLogo from '../../assets/Images/01-logo-jsl-branco 1.svg'

const Login = ({
  onChange,
  form,
  onChange,
  auth,
  formErrors,
}) => {
  return(
    <div className={Style.container}>
     <div className={Style.login}>
        <h1>Login</h1>
        <div className={Style.inputLogin}>
          <Input
            value={props.document}
            label="CPF"
            type="text"
            name="document"
            id="textDocument"
            onchange={props.onChange}
          />
        </div>
        <div className={Style.inputPass}>
          <Input
            value={props.password}
            label="Senha"
            type="password"
            name="password"
            id="textPassword"
            onchange={props.onChange}
          />
        </div>
        <Button
          action={auth}
        >
          Entrar
        </Button>
        <p><a href="''">Esqueceu a senha?</a></p>
      </div>
    </div>
  )
}

export default Login
