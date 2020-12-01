import React from 'react'
import Style from './style.module.css'
import { Button, Input, InputMasked, Loading } from '../../Components'

const Login = ({
  onChange,
  form,
  auth,
  formErrors,
  loading,
}) => {
  return(
    <div className={Style.container}>
      <div className={Style.logo} />
      <div className={Style.auth}>
        <InputMasked
          value={form.document}
          label="CPF"
          type="text"
          name="document"
          id="textDocument"
          onchange={onChange}
          formErrors={formErrors}
          mask="111.111.111.-11"
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
        {!loading && (
          <Button action={auth}>Entrar</Button>
        )}

        {loading && (
          <div className={Style.load}>
            <Loading />
          </div>
        )}
      </div>
    </div>
  )
}

export default Login
