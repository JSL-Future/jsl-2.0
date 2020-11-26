import React, { useEffect, useState} from 'react'
import { withRouter } from 'react-router-dom'
import DetailsContainer from '../../Containers/Details'
import ImplementService from '../../services/implement'

const Details = (props) => {
  const [implement, setImplement] = useState({
    active: false,
    createdAt: '',
    fleet: '',
    id: '',
    implement_events: [],
    operation: '',
    plate: '',
    reason: '',
    status: '',
    updatedAt: '',
  })

  const [shouldRequest, setShouldRequest] = useState(true)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const { id } = props.match.params
    if(shouldRequest) {
      ImplementService.getImplementById(id)
        .then(response => {
          setImplement(response.data)
          setShouldRequest(false)
          setLoading(false)
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
      loading={loading}
    />
  )
}

export default withRouter(Details)
