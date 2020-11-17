import React, { useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import DetailsContainer from '../../Containers/Details'
import ImplementService from '../../services/implement'

const Details = (props) => {
  const [implement, setImplement] = useState(   {
    status: '',
    event: '',
    operation: '',
    plate: '',
    checkin: {
      driver: '',
      createdAt: '',
      updatedAt: '',
    },
    checkout: {
      driver: '',
      createdAt: '',
      updatedAt: '',
    },
    id: null,
  })

  const [shouldRequest, setShouldRequest] = useState(true)

  useEffect(() => {
    const { id } = props.match.params
    if(shouldRequest) {
      ImplementService.getImplementById(id)
        .then(response => {
          setImplement(response.data)
          setShouldRequest(false)
        })
        .catch(error => console.log(error))
    }
  })

  const goToManager = () => {
    return props.history.push('/manager')
  }

  return (
    <DetailsContainer
      data={implement}
      backPage={goToManager}
    />
  )
}

export default withRouter(Details)
