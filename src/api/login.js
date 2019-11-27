import { post, get } from './api'

export default {
  loginAPI(params) {
    return post('/portal/r/jd', params)
  }
}