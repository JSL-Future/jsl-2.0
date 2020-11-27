import React from 'react'
import Style from './style.module.css'
import { Button, Input } from '../../Components'
import imageLogo from '../../assets/Images/01-logo-jsl-branco 1.svg'

const Login = ({
  onChange,
  form,
  auth,
  formErrors,
}) => {
  return(
    <div className={Style.login}>
      <div className={Style.logo}>
        <img className={Style.imgLogo}
          src={imageLogo}
          alt="logo-jsl"
        />
      </div>
      <div className={Style.auth}>
        <h1>Login</h1>
        <Input
          value={form.document}
          label="CPF"
          type="text"
          name="document"
          id="textDocument"
          onchange={onChange}
          formErrors={formErrors}
        />
        <div className={Style.inputPwd}>
          <Input
            value={form.password}
            label="Senha"
            type="password"
            name="password"
            id="textPassword"
            onchange={onChange}
            formErrors={formErrors}
          />
        </div>
        <Button
          action={auth}
        >
          Entrar
        </Button>
      </div>
    </div>
  )
}

export default Login
