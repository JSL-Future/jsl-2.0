import React, { useState } from 'react'
import axios from 'axios'
import ReleaseContainer from '../../Containers/Release'

const Release = () => {

  const details = {
    plate: '',
    checkin: {
      driver: '',
      event: '',
      createdAt: ''
    },
    checkout: {
      driver: '',
      event: '',
      createdAt: ''
    }
  }

  const [form, setForm] = useState ({
    driver: '',
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  const release = () => {
    axios.put('http://localhost:3000/implements', form)
      .then(response => console.log(response))
      .catch(error => console.log(error))
  }

  return (
    <ReleaseContainer  
      details={details}
      form={form}
      release={release}
      onChange={handleChange}
    />
  )
}

export default Release
