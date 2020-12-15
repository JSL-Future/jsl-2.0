import React, { useState } from 'React'
import FilterModal from '../../Containers/FilterModal'

const Filter = () => {
  const [showMOdal, setShowModal] = useState(true)
  
  const closeModal = () => {
    setShowModal(false)
  }

  return(
    <FilterModal 
      showModal={showMOdal}
      closeModal={closeModal}
    />
  )
}

export default Filter
