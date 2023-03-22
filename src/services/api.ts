import axios from 'axios'
import axiosRetry from 'axios-retry'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

const api = axios.create({
  baseURL: publicRuntimeConfig.backendUrl
})

const retryDelay = (retryNumber = 0) => {
  const seconds = Math.pow(2, retryNumber) * 1000
  const randomMs = 1000 * Math.random()
  return seconds + randomMs
}

axiosRetry(api, {
  retries: 5,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError
})

export default api
