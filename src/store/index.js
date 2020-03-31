import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    // 加入购物车
    addCart(state, payLoad) {
      // console.log(state.cartList)
      // 判断该商品是否是第一次添加
      // find函数：如果为true，返回obj.
      let oldProduct = state.cartList.find(function(obj) {
        return obj.id == payLoad.id
      })
      // console.log(oldProduct)
      if(oldProduct) {
        oldProduct.count+=1
      }else {
        state.cartList.push(payLoad)
      }
      //console.log(state.cartList)
    }
  },
  actions: {
  },
  modules: {
  }
})
