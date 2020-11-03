import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ReleaseContainer from '../../Containers/Release'

const Release = (props) => {

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
    axios.post('http://localhost:3000/implements', form)
      .then(response => {
        console.log(response)
        props.history.push('/signature')
      })
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

export default withRouter(Release)
