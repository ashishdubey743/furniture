// import Vue from 'vue'
// import Vuex from 'vuex'

// Vue.use(Vuex)

// export default new Vuex.Store({
//     state: {
//       cart: []
//     },
//     mutations: {
//       ADD_TO_CART(state, product) {
//         let item = state.cart.find(item => item.id === product.id);
//         if (item) {
//           item.quantity++;
//         } else {
//           state.cart.push({ ...product, quantity: 1 });
//         }
//       }
//     },
//     actions: {
//       addToCart({ commit }, product) {
//         commit('ADD_TO_CART', product);
//       }
//     },
//     getters: {
//       cartItems: state => state.cart
//     }
//   });


import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      cart: [

      ],
      products: [

      ]
    }
  },
  mutations: {
    addToCart(state, payload) {
      const existingProduct = state.cart.find(item => item.id === payload.id)
      if (existingProduct) {
        existingProduct.quantity += 1
      }
      else {
        state.cart.push(payload)
      }
    },
    clearCart(state) {
      state.cart = []
    },
    setProducts(state, products) {
      state.products = products
    }
  },
  actions: {
    // async getProducts(state) {
      // try {
      //   let response = await fetch('http://localhost:3000/products')
      //   if (!response.ok) {
      //     throw new Error("Failed to fetch products !")
      //   }
      //   const productList = await response.json()
      //   store.commit('setProducts', productList)
      // } catch (error) {
      //   console.error('Error fetching products:', error.message)
      // }
    // }
  }
})

export default store
