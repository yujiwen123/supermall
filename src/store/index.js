import { createStore } from 'vuex'

export default createStore({
  state: {
    cartList: []
  },
  mutations: {
    // 因为addCart中需要判断是增加数量还是添加商品最好放在actions中

    // addCart(state, payload) {
    //   // 1.payload新添加的商品
    //   // let oldProduct = null
    //   // for (let item of state.cartList) {
    //   //   if (item.iid === payload.iid)
    //   //     oldProduct = item
    //   // }
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //   // 2.判断oldProduct
    //   if (oldProduct) {
    //     oldProduct.count +=1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }

    addCounter(state, payload) {
      payload.count++
    },
    addCart(state, payload) {
      state.cartList.push(payload)
      payload.checked = false
    }
  },
  actions: {
    addCart(context, payload) {
      // 1.payload新添加的商品
      /* let oldProduct = null
      for (let item of state.cartList) {
        if (item.iid === payload.iid)
          oldProduct = item
      } */
      // let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
      // // 2.判断oldProduct
      // if (oldProduct) {
      //   // oldProduct.count += 1
      //   context.commit("addCounter", oldProduct)
      // } else {
      //   payload.count = 1
      //   // context.state.cartList.push(payload)
      //   context.commit("addCart", payload)
      // }


      return new Promise((resolve, reject) => {
        let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)
        // 2.判断oldProduct
        if (oldProduct) {
          // oldProduct.count += 1
          context.commit("addCounter", oldProduct)
          resolve("当前商品数量+1")
        } else {
          payload.count = 1
          // context.state.cartList.push(payload)
          context.commit("addCart", payload)
          resolve("添加新的商品")
        }
      })
    }
  },
  modules: {
  }
})
