// 首页的数据请求相关的函数。
import {request1, request2} from './request'

// 首页轮播图数据
export function getHomeBanner() {
  return request1({
    url: '/home/multidata'
  })
}
// 首页商品展示数据
export function getHomeGoods(type, page) {
  return request2({
    url: '/home/data',
    params: {
      page,
      type
    }
  })
} 