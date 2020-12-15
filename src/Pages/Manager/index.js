import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ManagerContainer from '../../Containers/Manager'
import ImplementService from '../../services/implement'
import { Menu } from '../../Components'
import {
  priorityTranslate,
  statusTranslate,
} from '../../utils/implement.translate'

const Manager = (props) => {

  const [data, setData] = useState([])
  const [shouldRequest, setShouldRequest] = useState(true)
  const [filterSelected, setFilterSelected] = useState('Todos')
  const [loading, setLoading] = useState(true)
  const [showModal, setShowModal] = useState(false)

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

  const handleFilter = async (filter) => {
    setLoading(true)
    setFilterSelected(filter)
    try {
      const filterQuery = filter === 'Todos' ? {} : { reason: filter }
      const { data } = await ImplementService.getImplements(filterQuery)
      setData(data)
      setLoading(false)
    } catch (error) {
      setLoading(false)
    }
  }

  const handleShowModal = () => {
    setShowModal(!showModal)
  }

  return (
   <Fragment>
      <ManagerContainer
        data={data}
        goToDetail={goToDetail}
        filterSelected={filterSelected}
        handleFilter={handleFilter}
        loading={loading}
        statusTranslate={statusTranslate}
        priorityTranslate={priorityTranslate}
        showModal={showModal}
        handleShowModal={handleShowModal}
      />
      <Menu />
   </Fragment>
  )
}

export default withRouter(Manager)
