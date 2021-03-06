import React, { useState } from  'react'
import { isEmpty, omit } from 'ramda'
import { withRouter } from 'react-router-dom'
import AuthService from '../../services/auth'
import ContainerLogin from '../../Containers/Login'
import Request from  '../../services/request'
import GAInitialize from '../../ga'
import { validationForm, EmptyField, replaceMask } from '../../utils/validators'
import { ContextProvider } from '../../Context'

const Login = ({
  history,
  updateUser
}) => {
  GAInitialize('/auth/login')

  const [form, setForm] = useState({
    document: '',
    password: ''
  })
  const [formErrors, setFormErrors] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = ({ target }) => {
    const message = EmptyField(target)
    setForm({
      ...form,
      [target.name]: target.value
    })

    if (message) {
      return setFormErrors({
        ...formErrors,
        [target.name]: message
      })
    }

    return setFormErrors(omit([target.name], formErrors))
  }

  const handleLogin = async () => {
    setLoading(true)
    try {
      const { data } = await AuthService.login({
        ...form,
        document: replaceMask(form.document),
      })
      updateUser(data.user)
      if (data.token) {
        localStorage.setItem('token', data.token)
      }
      Request.forceRenewAxiosInstance(data.token)
      history.push('/manager')
      setLoading(false)
    } catch (error) {
      setLoading(false)
      history.push('/auth/error')
    }
  }

  const authentication = () => {
    const errors = validationForm(form)
    setFormErrors(errors)
    return isEmpty(errors) && handleLogin(form)
  }

  return (
      <ContainerLogin
        auth={authentication}
        onChange={handleChange}
        formErrors={formErrors}
        form={form}
        loading={loading}
      />
  )
}

export default ContextProvider(withRouter(Login))
