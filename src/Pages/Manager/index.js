import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import ManagerContainer from '../../Containers/Manager'

const Manager = (props) => {

  const [data, setData] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/implements')
      .then(response => setData(response.data))
      .catch(error => console.log(error))
  })
  const goToCreateImplements = () => {
    return props.history.push('/create')
  }

  return (
    <ManagerContainer data={data} addImplement={goToCreateImplements}/>
  )
}

export default withRouter(Manager)
