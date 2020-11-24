import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import ReleaseContainer from '../../Containers/Release'
import ImplementService from '../../services/implement'

const Release = (props) => {

  const [implement, setImplement] = useState({
    status: '',
    reason: '',
    operation: '',
    plate: '',
    fleet: '',
    responsible: '',
    createdAt: '',
    updatedAt: '',
    id: null,
  })

  const [form, setForm] = useState ({ responsible: '' })
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

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const release = () => {
    const formattedImplement = {
      status: 'check-out',
      responsible: form.responsible,
    }

    ImplementService.updateImplement(implement.id, formattedImplement)
      .then(response => props.history.push('/manager'))
      .catch(error => console.log(error))
  }

  return (
    <ReleaseContainer
      implement={implement}
      form={form}
      release={release}
      onChange={handleChange}
    />
  )
}

export default withRouter(Release)
