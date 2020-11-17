import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import CreateContainer from '../../Containers/Create'

const Create = (props) => {

  const [form, setForm] = useState({
    operation: '',
    reason: '',
    plate: '',
    fleet: '',
    responsible: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const save = () => {
    const {
      responsible,
      reason,
      plate,
      fleet,
      operation,
    } = form

    axios.post('http://localhost:3003/api/implements', {
      operation,
      plate,
      fleet,
      responsible,
      reason,
    })
      .then(response => {
        props.history.push('/manager')
      })
      .catch(error => console.log(error))
  }

  const handleGetFleet = (plate) => {
    axios.get(`http://localhost:3003/api/fleets?plate=${plate}`)
      .then(response => console.log('=++>>', response))
      .catch(error => console.log(error))
  }

  return (
    <CreateContainer
      form={form}
      onChange={handleChange}
      onBlur={handleGetFleet}
      save={save}
    />
  )
}

export default withRouter(Create)
