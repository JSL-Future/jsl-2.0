import React, { useState } from  'react'
import AuthService from '../../services/auth'
import ContainerLogin from '../../Containers/Login'

const Login = () => {

  const [form, setForm] = useState({
    document: '',
    password: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const handleLogin = async () => {
    try {
      const { data } = await AuthService.login({
        ...form,
        document: form.document.replace(/[^a-z0-9]/gi,'')
      })
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      setTimeout(() => window.location.href = '/#/manager', 3000)
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
