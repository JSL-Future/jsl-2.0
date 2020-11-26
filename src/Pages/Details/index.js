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
  const [showModalEvent, setShowModalEvent] = useState(false)
  const [showModalPriority, setShowModalPriority] = useState(false)

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

  const handleCloseModalPriority = () => setShowModalPriority(false)
  const handleCloseModalEvent = () => setShowModalEvent(false)
  const handleOpenModalEvent = () => setShowModalEvent(true)
  const handleOpenModalPriority = () => setShowModalPriority(true)

  return (
    <DetailsContainer
      data={implement}
      backPage={goToManager}
      loading={loading}
      showModalEvent={showModalEvent}
      showModalPriority={showModalPriority}
      handleCloseModalEvent={handleCloseModalEvent}
      handleOpenModalEvent={handleOpenModalEvent}
      handleOpenModalPriority={handleOpenModalPriority}
      handleCloseModalPriority={handleCloseModalPriority}
    />
  )
}

export default withRouter(Details)
