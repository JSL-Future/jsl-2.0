import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import CreateContainer from '../../Containers/Create'

const Create = (props) => {

  const [form, setForm] = useState({
    operacao: '',
    event: '',
    plate: '',
    driver: ''
  })

    const handleChange = (event) => {
      setForm({
        ...form,
        [event.target.name]: event.target.value
      })
    }

  return (
    <CreateContainer
      form={form}
      onChange={handleChange}
    />
  )
}

export default withRouter(Create)
