import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products:[

    ],
    cart: [

    ],
    totalCart: 0
  },
  mutations: {
    addToCart(state, item){
      state.cart.push(item)
      state.totalCart += parseInt(item.price)
    },
    fetchProducts(state, data){
      state.products = data
    },
    cleanCart(state){
        state.cart = []
        state.totalCart = 0
    },    
    checkout(state){
      state.totalCart = 0
      state.cart = []
    },
    buy(state){
      state.totalCart = 0
    }
  },
  getters: {
    totalCart(state){
      return state.totalCart
    },
    getCart(state){
      return state.cart 
    }
  },
  actions: {
    addToCart([commit], item){
      commit('addToCart', item)
    },
    totalCart([commit], totalCart){
      commit('totalCart', totalCart)
    },
    checkout([commit]){
      commit('checkout')
    },
    buy([commit]){
      commit('buy')
    },
    cleanCart([commit]){
      commit('cleanCart')
    },
    fetchData(context){
      fetch(`http://localhost:3000/products`)
      .then(response => response.json())
      .then(response => {
        context.commit("fetchProducts", response)
      })

      // fetch(`http://localhost:3000/cart/0`)
      // .then(response => response.json()
      // .then(response => {
      //   context.commit("fetchCart", response)
      // }))
      
    }

  },
  modules: {
  }
})
