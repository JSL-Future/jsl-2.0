import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ReleaseContainer from '../../Containers/Release'

const Release = (props) => {

  const [implement, setImplement] = useState(   {
    status: '',
    event: '',
    operation: '',
    plate: '',
    checkin: {
      driver: '',
      createdAt: '',
      updatedAt: '',
    },
    checkout: {
      driver: '',
      createdAt: '',
      updatedAt: '',
    },
    id: null,
  })

  const [form, setForm] = useState ({ driver: '' })
  const [shouldRequest, setShouldRequest] = useState(true)

  useEffect(() => {
    const { id } = props.match.params
    if(shouldRequest) {
      axios.get(`http://localhost:3000/implements/${id}`)
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
    axios.put(`http://localhost:3000/implements/${implement.id}`, {
      ...implement,
      status: 'release',
      checkout: {
        driver: form.driver,
        createdAt: implement.checkout.createdAt,
        updatedAt: new Date(),
      }
    })
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
