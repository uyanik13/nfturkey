// reusable aliases for mutations


export const CART_MUTATIONS = {
  SET_CART: 'SET_CART',
  CREATE_CART_ITEM: 'CREATE_CART_ITEM',
  UPDATE_CART_ITEM: 'UPDATE_CART_ITEM',
  REMOVE_CART_ITEM: 'REMOVE_CART_ITEM',
  CLEAR_CART: 'CLEAR_CART',
}

export const state = () => ({
  items: [
          {
            id : 999,
            title : 'Versace Luxury Yemek Odası',
            slug : 'versace-Luxury-yemek-odasi',
            thumbnail : 'https://s.eticaretbox.com/516/pictures/thumb/255X-150X-JXBRRTZBKI4292020135749_versace-luxury-yemek-odasi.jpg',
            regularPrice:84.90,
            salePrice:50.94,
            quantity : 3,
          },
          {
            id : 998,
            title : 'Elitra Ceviz Karyola ve Başucu',
            slug : 'elitra-ceviz-karyola-ve-basucu',
            thumbnail : 'https://s.eticaretbox.com/516/pictures/thumb/255X-150X-GCEDOGZRGU1122021153352_21094.jpg',
            regularPrice:85.90,
            salePrice:60.94,
            quantity : 1,
          },
  ],


})

export const mutations = {

    //SET ALL DATA
  [CART_MUTATIONS.SET_CART](state, items) {
    state.items = items
  },


  //CREATE ONLY ONE DATA
  [CART_MUTATIONS.CREATE_CART_ITEM](state, item) {
    state.items.unshift(item)
  },



  //UPDATE THE DATA
  [CART_MUTATIONS.UPDATE_CART_ITEM](state, item) {
    const ItemIndex = state.items.findIndex((i) => i.id === item.id)
    Object.assign(state.items[ItemIndex], item)
  },


  //REMOVE THE DATA
  [CART_MUTATIONS.REMOVE_CART_ITEM](state, itemId) {
    const ItemIndex = state.items.findIndex((i) => i.id === itemId)
    state.items.splice(ItemIndex, 1)
  },

  [CART_MUTATIONS.CLEAR_CART](state) {
    state.items = null
  }
 }

export const actions = {
  async get({commit, getters}) {
    //const { data:cart } = await this.$axios.get(`/api/cart/${getters.getCode}`)
    commit(CART_MUTATIONS.SET_CART, cart)
  },
  // Create new cart
  async create({commit, dispatch}, request) {
    // const { data: {id, code} } = await this.$axios.post(
    //   '/api/cart',
    //   request)

    dispatch('get')
  },


  // Update cart by code in state
  async update({commit, dispatch, getters}, item) {
    // const { data: {id, code} } = await this.$axios.put(
    //   `/api/cart/${getters.getCode}`,
    //   request
    // )

    commit(CART_MUTATIONS.UPDATE_CART_ITEM, item)
  },


  // Add item on cart
  async add({ getters, commit, dispatch }, item) {
   // const { data:cart } = await this.$axios.post(`/api/cart/${getters.getCode}/item/${itemId}`,{})
    if (!item.quantity) {
        item.quantity = 1
    }
    if (getters.getCartItem(item.id)) {
        let storeItem = getters.getCartItem(item.id)
        item.quantity = storeItem.quantity + 1
        commit(CART_MUTATIONS.UPDATE_CART_ITEM, item)
    } else {
      commit(CART_MUTATIONS.CREATE_CART_ITEM, item)
    }
  },


  // Remove item on cart
  async remove({commit}, itemId) {
    //const { data:cart } = await this.$axios.delete(`/api/cart/${getters.getCode}/item/${itemId}`)

    commit(CART_MUTATIONS.REMOVE_CART_ITEM, itemId)
  },

  async clear({commit,_}) {
    commit(CART_MUTATIONS.CLEAR_CART)
  }
}

export const getters = {
  // determine if the user is authenticated based on the presence of the access token
  getCart: (state) => {
    return state.items
  },
  getCount: (state) => {
     return state.items.map(item => item.quantity).reduce((a, c) => a + c, 0)
  },
  getCartItem: (state) => id => {
     return state.items.find(item => item.id === id)
  },
  getTotal: (state) => {
    return state.items.map(item => item.quantity * item.salePrice).reduce((a, c) => a+c, 0)
  }
}
