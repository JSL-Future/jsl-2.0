import React from 'react'
import DetailsContainer from '../../Containers/Details'

const Details = () => {

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

  return (
    <DetailsContainer details={details} />
  )
}

export default Details
