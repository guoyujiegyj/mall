import axios from 'axios'

export function request1(config) {
  // 创建axios实例1
  const instance1 = axios.create({
    baseURL: 'http://123.207.32.32:8000',
    timeout: 5000
  })
  return instance1(config)
}

export function request2(config) {
  // 创建axios实例2
  const instance2 = axios.create({
    baseURL: 'http://123.207.32.32:8000/api/wh',
    timeout: 5000
  })
  return instance2(config)
}