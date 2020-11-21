import React, { useState } from  'react'
import { withRouter } from 'react-router-dom'
import AuthService from '../../services/auth'
import ContainerLogin from '../../Containers/Login'
import Request from  '../../services/request'

const Login = ({
  history,
}) => {

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
      Request.forceRenewAxiosInstance(data.token)
      history.push('/manager')
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

export default withRouter(Login)
