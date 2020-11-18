import { path } from 'ramda'
import axios from 'axios'
import qs from 'qs'

const HOST = 'http://157.230.8.214'
const PORT = 3003


const createInstance = () => {
  const token = localStorage.getItem('token')

  const axiosInstace = axios.create({
    baseURL: `${HOST}:${PORT}`,
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

  forceRenewAxiosInstance = () => {
    this.axiosInstance = createInstance()
  }
}

export default new Resquest()
