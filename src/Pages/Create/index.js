import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import CreateContainer from '../../Containers/Create'

const Create = (props) => {

  const [form, setForm] = useState({
    operation: '',
    event: '',
    plate: '',
    fleet: '',
    driver: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const save = () => {
    const {
      driver,
      event,
      plate,
      fleet,
      operation,
    } = form

    const defaultDate = new Date()

    const formattedData = {
      status: 'unavailable',
      event,
      operation,
      plate,
      fleet,
      checkin: {
        driver,
        createdAt: defaultDate,
        updatedAt: defaultDate,
      },
      checkout: {
        driver: null,
        createdAt: defaultDate,
        updatedAt: defaultDate,
      }
    }

    axios.post('http://localhost:3000/implements', formattedData)
      .then(response => {
        props.history.push('/manager')
      })
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
