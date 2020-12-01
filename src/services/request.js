import { path } from 'ramda'
import axios from 'axios'
import qs from 'qs'

const PROXY_API = 'https://sandbox-jsl.herokuapp.com'

const createInstance = () => {
  const token = localStorage.getItem('token')
  const axiosInstace = axios.create({
    baseURL: PROXY_API,
    headers: {
      Authorization: `bearer ${token}`,
    },
    paramsSerializer: qs.stringify,
  })

  axiosInstace.interceptors.response.use(
    (response) => {
      return response
    },
    (error) => {
      const statusCode = path(['response', 'status'], error)

      if (statusCode === 401 || statusCode === 403) {
        window.location.href = '/#/auth'
      }

      return Promise.reject(error.response);
    })

    return axiosInstace
}

class Resquest {
  axiosInstance = createInstance()

  getAxiosInstance = () => {
    return this.axiosInstance
  }

  forceRenewAxiosInstance = (token = null) => {
    this.axiosInstance = createInstance(token)
  }
}

export default new Resquest()
