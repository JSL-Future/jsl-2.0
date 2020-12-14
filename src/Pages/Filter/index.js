import React, { useState, useEffect } from 'React'
import FilterModal from '../../Containers/FilterModal'

const Filter = () => {
  const [form, setForm] = useState({
    plate: '',
    dateInitial: '',
    dateEnd: '',
    operation: '',
    priority: '',
    service: '',
    status: '',
  })

  const handleChange = ({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })    
  }

  const [showMOdal, setShowModal] = useState(true)

  const closedModal = () => {
    setShowModal(false)
  }

  useEffect(() => {
    console.log(form)
    console.log('Page: ', typeof handleChange)
  })

  return(
    <FilterModal 
      form={form}
      onchange={handleChange}
      showModal={showMOdal}
      closeModal={closedModal}
    />
  )
}

export default Filter
