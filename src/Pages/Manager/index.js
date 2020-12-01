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

  const HandleFilter = filter => setFilterSelected(filter)

  return (
   <Fragment>
      <ManagerContainer
        data={data}
        goToDetail={goToDetail}
        filterSelected={filterSelected}
        HandleFilter={HandleFilter}
        loading={loading}
        statusTranslate={statusTranslate}
        priorityTranslate={priorityTranslate}
      />
      <Menu />
   </Fragment>
  )
}

export default withRouter(Manager)
