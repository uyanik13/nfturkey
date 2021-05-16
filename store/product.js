

export const PRODUCT_MUTATIONS = {
  SET_PRODUCT: 'SET_PRODUCT',
}

export const state = () => ({
  product: null,
})

export const mutations = {

  //SET ALL DATA
  [PRODUCT_MUTATIONS.SET_PRODUCT](state, product) {
    state.product = product
  },



  //CREATE ONLY ONE DATA
  // [PRODUCT_MUTATIONS.CREATE_ADDRESS](state, product) {
  //   state.addresses.unshift(address)
  // },



  //UPDATE THE DATA
  // [PRODUCT_MUTATIONS.UPDATE_ADDRESS](state, address) {
  //   const ItemIndex = state.addresses.findIndex((i) => i.id === address.id)
  //   Object.assign(state.addresses[ItemIndex], address)
  // },


  //REMOVE THE DATA
  // [PRODUCT_MUTATIONS.REMOVE_ADDRESS](state, itemId) {
  //   const ItemIndex = state.addresses.findIndex((i) => i.id === itemId)
  //   state.addresses.splice(ItemIndex, 1)
  // },

 }

export const actions = {

  //GET ACTION
  async getProduct({commit},slug) {
    const { data:product } = await this.$axios.get(`/api/product/${slug}`)
    commit(PRODUCT_MUTATIONS.SET_PRODUCT, product)
  },




  // POST ACTION
  // async createAddress({commit}, request) {
  //   const { data:address } = await this.$axios.post('/api/user/address',request)
  //   commit(PRODUCT_MUTATIONS.CREATE_ADDRESS, address)
  // },



  // UPDATE ACTION
  // async updateAddress({commit,_, id}, request) {
  //   const { data:address } = await this.$axios.put(`/api/address/${id}`,request)
  //   commit(PRODUCT_MUTATIONS.UPDATE_ADDRESS, address)

  // },

  // DELETE ACTION
  // async removeAdress({commit}, itemId) {
  //   await this.$axios.delete(`/api/user/address/${itemId}`)
  //   commit(PRODUCT_MUTATIONS.REMOVE_ADDRESS, itemId)
  // },



}

export const getters = {
  // determine if the user is authenticated based on the presence of the access token
  product: (state) => {
    return state.addresses
  },

   product: (state) => (itemId) =>  {
    return state.product.filter((address) => product.id === itemId)
  }

}
