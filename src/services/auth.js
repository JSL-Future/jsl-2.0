import request from './request'
const url = '/auth/login'

class AuthService {
  constructor() {
    this.axios = request.getAxiosInstance()
  }

  login(value) {
    return this.axios.post(url, value)
  }
}

export default new AuthService()