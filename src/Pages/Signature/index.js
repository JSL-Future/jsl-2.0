import React from 'react'
import SignatureContainer from '../../Containers/Signature'

const Signature = () => {

  const Details = {
    plate: 'DSG2100',
    checkin: {
      driver:'Thiago Ramalho de Souza',
      event: 'Corretiva',
      createdAt: '28/10/2020'
    }
  }

  return (
    <SignatureContainer details={Details} />
  )
}

export default Signature