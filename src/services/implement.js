import request from './request'
const url = '/api/implements'

class ImplementService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  saveImplement(data) {
    return this.axios.post(url, data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
  }

  updateImplement(id, data) {
    return this.axios.put(`${url}/${id}`, data, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
  }

  getImplementById(id) {
    return this.axios.get(`${url}/${id}`, { headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
  }

  getImplements(query) {
    return this.axios.get(url, { params: query, headers: { Authorization: `Bearer ${localStorage.getItem('token')}`}})
  }
}

export default new ImplementService()