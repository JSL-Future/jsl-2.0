import request from './request'
const url = '/api/implements'

class ImplementService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  saveImplement(data) {
    return this.axios.post(url, data)
  }

  updateImplement(id, data) {
    return this.axios.put(`${url}/${id}`, data)
  }

  getImplementById(id) {
    return this.axios.get(`${url}/${id}`)
  }

  getImplements() {
    return this.axios.get(url)
  }
}

export default new ImplementService()