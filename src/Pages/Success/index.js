import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import infoPage from './infoPage'
import SuccessContainer from '../../Containers/Sucess'

const Success = ({
  history,
  match,
  location,
}) => {
  const [id, setId] = useState('null')
  const [successType, setSuccessType] = useState('null')

  useEffect(() => {
    const { id } = match.params
    const pathname = location.pathname
    const type = pathname.split('/')[1]

    setId(id)
    setSuccessType(type)
  }, [
    location.pathname,
    match.params,
  ])

  const action = () => {
    if (successType === 'create') {
      history.push('/create')
    }

    if (
      successType === 'detail'
        || successType === 'priority'
        || successType === 'suply'
      ) {
      history.push(`/detail/${id}`)
    }
  }

  return (
    <SuccessContainer action={action} {...infoPage[successType]} />
  )
}

export default withRouter(Success)
