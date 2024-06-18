import { createStore } from 'vuex'
import createPersistedState from 'vuex-persistedstate';

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
    deleteFromCart(state, productId) {
      state.cart = state.cart.filter(item => item.id !== productId)
    },
    increaseQuantity(state, productId) {
      const existingProduct = state.cart.find(item => item.id === productId)
      if (existingProduct) {
        existingProduct.quantity += 1
      }
    },
    decreaseQuantity(state, productId) {
      const existingProduct = state.cart.find(item => item.id === productId)
      if (existingProduct) {
        if(existingProduct.quantity != 1){
          existingProduct.quantity -= 1
        } else{
          store.commit('deleteFromCart', productId)
        }
      }
    },
    clearCart(state) {
      state.cart = []
    },
    setProducts(state, products) {
      state.products = products
    }
  },
  getters: {
    cartTotal(state) {
      return state.cart.reduce((total, product) => {
        return total + product.price * product.quantity
      }, 0)
    },
    cartProducts(state) {
      return state.cart
    }
  },
  actions: {

  },
  plugins: [createPersistedState()]
})

export default store
