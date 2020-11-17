import React from 'react'
import Style from './style.module.css'
import Input from '../../Components/Input'
import Button from '../../Components/Button'
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
      <div className={Style.field}>
        <h1>Login</h1>
        <Input 
          value={props.document}
          label="CPF"
          type="text"
          name="document"
          id="textDocument"
          onchange={props.onChange}
        />
        <Input 
          value={props.password}
          label="Senha"
          type="text"
          name="password"
          id="textPassword"
          onchange={props.password}
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
