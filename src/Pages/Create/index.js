import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
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

  const save = () => {
    axios.post('http://localhost:3000/implements', form)
      .then(response => console.log(response))
      .catch(error => console.log(error))
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
