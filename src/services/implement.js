import request from './request'
const url = '/api/implements'

class ImplementService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  saveImplement(data, token) {
    return this.axios.post(url, data, { headers: { Authorization: `Beare ${localStorage.getItem('token')}`}})
  }

  updateImplement(id, data, ) {
    return this.axios.put(`${url}/${id}`, data, { headers: { Authorization: `Beare ${localStorage.getItem('token')}`}})
  }

  getImplementById(id, ) {
    return this.axios.get(`${url}/${id}`, { headers: { Authorization: `Beare ${localStorage.getItem('token')}`}})
  }

  getImplements() {
    return this.axios.get(url, { headers: { Authorization: `Beare ${localStorage.getItem('token')}`}})
  }
}

export default new ImplementService()