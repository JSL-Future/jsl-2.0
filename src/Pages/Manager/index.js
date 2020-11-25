import React, { useState, useEffect, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import ManagerContainer from '../../Containers/Manager'
import ImplementService from '../../services/implement'
import { Menu } from '../../Components'

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

  const goToCreateImplements = () => {
    return props.history.push('/create')
  }

  const goToRelease = id => {
    return props.history.push(`/release/${id}`)
  }

  const goToDetail = id => {
    return props.history.push(`/detail/${id}`)
  }

  const HandleFilter = filter => setFilterSelected(filter)

  return (
   <Fragment>
      <ManagerContainer
        data={data}
        addImplement={goToCreateImplements}
        release={goToRelease}
        goToDetail={goToDetail}
        filterSelected={filterSelected}
        HandleFilter={HandleFilter}
        loading={loading}
      />
      <Menu />
   </Fragment>
  )
}

export default withRouter(Manager)
