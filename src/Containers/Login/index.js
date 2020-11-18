import React from 'react'
import Style from './style.module.css'
import { Button, Input, InputMasked } from '../../Components'
import imageLogo from '../../assets/Images/01-logo-jsl-branco 1.svg'

const Login = (props) => {
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
        <InputMasked 
          value={props.document}
          label="CPF"
          type="text"
          name="document"
          id="textDocument"
          onchange={props.onChange}
          mask={[/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/,/[0-9]/]}
        />
        <Input 
          value={props.password}
          label="Senha"
          type="password"
          name="password"
          id="textPassword"
          onchange={props.onChange}
        />
        <Button
          action={props.auth}
        >
          Entrar
        </Button>
      </div>
    </div>
  )
}

export default Login
