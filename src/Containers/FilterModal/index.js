import React from 'react'
import {
  Filters,
  Modal,
} from '../../Components'

const FilterModal = ({
  handleFilter,
  handleShowModal,
  showModal,
}) => {

  return(
    <Modal show={showModal}>
      <Filters
        closeModal={handleShowModal}
        handleFilter={handleFilter}
      />
    </Modal>
  )
}

export default FilterModal
