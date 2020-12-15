import React from 'react'
import {
  Filters,
  Modal,
} from '../../Components'

const FilterModal = (
  showModal,
  closeModal,
) => {
  return( 
    <Modal show={showModal}>
      <Filters
        closeModal={closeModal}
      />
    </Modal>
  )
}

export default FilterModal
