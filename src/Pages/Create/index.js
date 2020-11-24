import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import CreateContainer from '../../Containers/Create'
import ImplementService from '../../services/implement'

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

  const save = async () => {
    const {
      responsible,
      reason,
      plate,
      fleet,
      operation,
    } = form

    try {
      await ImplementService.saveImplement({
        operation,
        plate,
        fleet,
        responsible,
        reason,
      })
      props.history.push('/manager')
    } catch (error) {
      alert('Error ao cadastrar!')
    }
  }

  return (
    <CreateContainer
      form={form}
      onChange={handleChange}
      save={save}
    />
  )
}

export default withRouter(Create)
