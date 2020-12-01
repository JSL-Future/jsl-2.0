import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import infoPage from './infoPage'
import ErrorContainer from '../../Containers/Error'

const Error = ({
  location,
  history,
  match,
}) => {
  const [id, setId] = useState('null')
  const [errorType, setErrorType] = useState('null')

  useEffect(() => {
    const { id } = match.params
    const pathname = location.pathname
    const type = pathname.split('/')[1]
    setId(id)
    setErrorType(type)
  }, [
    location.pathname,
    match.params,
  ])

  const again = () => {
    if (errorType === 'auth') {
      history.push('/auth/login')
    }

    if (errorType === 'create') {
      history.push('/create')
    }

    if (
        errorType === 'detail'
        || errorType === 'priority'
        || errorType === 'suply'
      ) {
      history.push(`/detail/${id}`)
    }
  }

  return (
    <ErrorContainer again={again} {...infoPage[errorType]} />
  )
}

export default withRouter(Error)
