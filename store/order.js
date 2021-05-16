
export const ORDER_MUTATIONS = {
  SET_ORDER   : 'SET_ORDER',
  CREATE_ORDER: 'CREATE_ORDER',
  UPDATE_ORDER: 'UPDATE_ORDER',
  REMOVE_ORDER: 'REMOVE_ORDER',
  SET_PAYMENT_FORM: 'SET_PAYMENT_FORM',
}

export const state = () => ({
  orders: [],
  paymentForm: null,
})

export const mutations = {
  [ORDER_MUTATIONS.SET_ORDER](state, ORDER) {
    state.orders = ORDER
  },

  [ORDER_MUTATIONS.SET_PAYMENT_FORM](state, form) {
    state.paymentForm = form
  },

  [ORDER_MUTATIONS.CREATE_ORDER](state, ORDER) {
    state.orders.unshift(ORDER)
  },

  [ORDER_MUTATIONS.UPDATE_ORDER](state, ORDER) {
    const ItemIndex = state.orders.findIndex((i) => i.id === ORDER.id)
    Object.assign(state.orders[ItemIndex], ORDER)
  },

  [ORDER_MUTATIONS.REMOVE_ORDER](state, itemId) {
    const ItemIndex = state.orders.findIndex((i) => i.id === itemId)
    state.orders.splice(ItemIndex, 1)
  }
 }

export const actions = {
  async get({commit}) {
    const { data:orders } = await this.$axios.get(`/api/user/order?status=active`)
    commit(ORDER_MUTATIONS.SET_ORDER, orders)
  },

  // Create user ORDER
  async create({commit}, request) {
    const { data: ORDER } = await this.$axios.post('/api/order', request)
    commit(ORDER_MUTATIONS.CREATE_ORDER, ORDER)
  },

  // Update ORDER
  async update({commit,_, id}, request) {
    const { data:ORDER } = await this.$axios.put(`/api/order/${id}`,request)
    commit(ORDER_MUTATIONS.UPDATE_ORDER, ORDER)

  },

  // Remove ORDER
  async remove({commit}, itemId) {
    await this.$axios.delete(`/api/order/${itemId}`)
    commit(ORDER_MUTATIONS.REMOVE_ORDER, itemId)


  }
}

export const getters = {
  orders: (state) => {
    return state.orders
  },
  paymentForm: (state) => {
    return state.paymentForm
  },
  order: (state) => (itemId) =>  {
    return state.orders.filter((order) => order.id === itemId)
  }

}
