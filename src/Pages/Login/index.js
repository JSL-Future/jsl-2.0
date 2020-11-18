import React, { useState } from  'react'
import AuthService from '../../services/auth'
import ContainerLogin from '../../Containers/Login'

const Login = () => {

  const [form, setForm] = useState({
    document: '',
<<<<<<< HEAD
    password: ''
=======
    password: '',
>>>>>>> 32c757c... Adicionado props no InputMasked
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleLogin = async () => {
    try {
      const { data } = await AuthService.login(form)
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      window.location.href = '/#/manager'
    } catch (error) {
      console.log('=========>>', error)
    }
  }

  return (
    <ContainerLogin
      auth={handleLogin}
      onChange={handleChange}
    />
  )
}

export default Login
