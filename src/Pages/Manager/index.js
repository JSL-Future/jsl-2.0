import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ManagerContainer from '../../Containers/Manager'

const Manager = (props) => {

  const [data, setData] = useState([])
  const [shouldRequest, setShouldRequest] = useState(true)

  useEffect(() => {
    if(shouldRequest) {
      axios.get('http://localhost:3000/implements')
        .then(response => {
          setData(response.data)
          setShouldRequest(false)
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


  return (
    <ManagerContainer
      data={data}
      addImplement={goToCreateImplements}
      release={goToRelease}
      detail={goToDetail}
    />
  )
}

export default withRouter(Manager)
