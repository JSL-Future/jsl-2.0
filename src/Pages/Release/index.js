import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ReleaseContainer from '../../Containers/Release'

const Release = (props) => {

  const [implement, setImplement] = useState({
    status: '',
    reason: '',
    events: [],
    operation: '',
    plate: '',
    fleet: '',
    responsible: '',
    createdAt: '',
    updatedAt: '',
    _id: null,
  })

  const [form, setForm] = useState ({ responsible: '' })
  const [shouldRequest, setShouldRequest] = useState(true)

  useEffect(() => {
    const { id } = props.match.params
    if(shouldRequest) {
      axios.get(`http://localhost:3003/api/implements/${id}`)
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

    axios.put(`http://localhost:3003/api/implements/${implement._id}`, formattedImplement)
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
