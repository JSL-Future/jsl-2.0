import React from  'react'
import AuthService from '../../services/auth'

const Login = () => {

  const handleLogin = async () => {
    try {
      const { data } = await AuthService.login({
        document: '43947321821',
        password: '123456',
      })

      if (data.token) {
        localStorage.setItem('token', data.token)
        window.location.href = '/#/manager'
      }
    } catch (error) {
      console.log('=========>>', error)
    }
  }

  return (
    <button onClick={handleLogin}>Logar</button>
  )
}

export default Login
