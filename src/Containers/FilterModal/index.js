import React from 'react'
import {
  Filters,
  Modal,
} from '../../Components'

const FilterModal = ({
  handleFilter,
  handleShowModal,
  showModal,
  form,
  onChange,
  clearFilters,
}) => {

  return(
    <Modal show={showModal}>
      <Filters
        closeModal={handleShowModal}
        handleFilter={handleFilter}
        form={form}
        onChange={onChange}
        clearFilters={clearFilters}
      />
    </Modal>
  )
}

export default FilterModal
