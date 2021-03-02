import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ManagerContainer from '../../Containers/Manager'
import ImplementService from '../../services/implement'
import { Menu } from '../../Components'
import {
  depara,
  priorityTranslate,
  statusTranslate,
} from '../../utils/implement.translate'

const filtersInitialState = {
  plate: '',
  operation: '',
  priority: '',
  service: '',
  status: '',
}

const Manager = (props) => {
  const [data, setData] = useState([])
  const [shouldRequest, setShouldRequest] = useState(true)
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)
  const [form, setForm] = useState(filtersInitialState)

  useEffect(() => {
    if(shouldRequest && localStorage.getItem('token')) {
      ImplementService.getImplements()
        .then(response => {
          setData(response.data)
          setShouldRequest(false)
          setLoading(false)
        })
        .catch(error => console.log(error))
    }
  })

  const goToDetail = id => {
    return props.history.push(`/detail/${id}`)
  }

  const handleFilter = async () => {
    const buildQuery = {
     ...form,
      priority: depara[form.priority],
      status: depara[form.status],
    }
    setLoading(true)
    try {
      const { data } = await ImplementService.getImplements(buildQuery)
      setData(data)
      setLoading(false)
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      setShowModal(false)
    }
  }

  const clearFilters = async () => {
    setForm(filtersInitialState)
    try {
      const { data } = await ImplementService.getImplements({})
      setData(data)
      setLoading(false)
      setShowModal(false)
    } catch (error) {
      setLoading(false)
      setShowModal(false)
    }
  }

  const handleShowModal = () => {
    setShowModal(true)
  }

  const onChange =({ target }) => {
    const { name, value } = target
    setForm({
      ...form,
      [name]: value,
    })
  }

  return (
   <Fragment>
      <ManagerContainer
        data={data}
        goToDetail={goToDetail}
        handleFilter={handleFilter}
        loading={loading}
        statusTranslate={statusTranslate}
        priorityTranslate={priorityTranslate}
        showModal={showModal}
        handleShowModal={handleShowModal}
        form={form}
        onChange={onChange}
        clearFilters={clearFilters}
      />
      <Menu />
   </Fragment>
  )
}

export default withRouter(Manager)
