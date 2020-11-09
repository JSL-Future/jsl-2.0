import React, { useEffect, useState} from 'react'
import axios from 'axios'
import DetailsContainer from '../../Containers/Details'

const Details = (props) => {

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

  return (
    <DetailsContainer data={implement} />
  )
}

export default Details
