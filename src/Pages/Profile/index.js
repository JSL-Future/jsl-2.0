import React, { memo } from 'react'
import ContainerProfile from '../../Containers/Profile'
import { ContextProvider } from '../../Context'

const Profile = ({ user }) => {
  return (
    <ContainerProfile 
      name={user.name}
      document={user.document}
    />
  )
}

export default memo(ContextProvider(Profile))
