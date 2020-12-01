import React from 'react'
import { withRouter } from 'react-router-dom'
import ContainerProfile from '../../Containers/Profile'
import { ContextProvider } from '../../Context'

const Profile = ({
  user,
  history,
}) => {
  const loggout = () => {
    localStorage.removeItem('token')
    history.push('/auth')
  }

  return (
    <ContainerProfile
      name={user.name}
      document={user.document}
      action={loggout}
    />
  )
}

export default ContextProvider(withRouter(Profile))
