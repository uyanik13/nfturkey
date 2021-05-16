
import { AUTH_MUTATIONS } from '~/store/auth'

export const USER_MUTATIONS = {
  SET_ADDRESS: 'SET_ADDRESS',
  CREATE_ADDRESS: 'CREATE_ADDRESS',
  UPDATE_ADDRESS: 'UPDATE_ADDRESS',
  REMOVE_ADDRESS: 'REMOVE_ADDRESS',
  SET_CREDIT_CARDS: 'SET_CREDIT_CARDS',
  CREATE_CREDIT_CARD: 'CREATE_CREDIT_CARD',
  REMOVE_CREDIT_CARD: 'REMOVE_CREDIT_CARD',

}

export const state = () => ({
  credit_cards: [],
  addresses: []
})

export const mutations = {

  //SET ALL DATA
  [USER_MUTATIONS.SET_ADDRESS](state, address) {
    state.addresses = address
  },
  [USER_MUTATIONS.SET_CREDIT_CARDS](state, card) {
    state.credit_cards = card
  },

  //CREATE ONLY ONE DATA
  [USER_MUTATIONS.CREATE_ADDRESS](state, address) {
    state.addresses.unshift(address)
  },
  [USER_MUTATIONS.CREATE_CREDIT_CARD](state, card) {
    state.credit_cards.unshift(card)
  },


  //UPDATE THE DATA
  [USER_MUTATIONS.UPDATE_ADDRESS](state, address) {
    const ItemIndex = state.addresses.findIndex((i) => i.id === address.id)
    Object.assign(state.addresses[ItemIndex], address)
  },


  //REMOVE THE DATA
  [USER_MUTATIONS.REMOVE_ADDRESS](state, itemId) {
    const ItemIndex = state.addresses.findIndex((i) => i.id === itemId)
    state.addresses.splice(ItemIndex, 1)
  },
  [USER_MUTATIONS.REMOVE_CREDIT_CARD](state, itemId) {
    const ItemIndex = state.credit_cards.findIndex((i) => i.id === itemId)
    state.credit_cards.splice(ItemIndex, 1)
  }
 }

export const actions = {

  //GET ACTION
  async getUserAddresses({commit}) {
    const { data:addresses } = await this.$axios.get(`/api/user/address`)
    commit(USER_MUTATIONS.SET_ADDRESS, addresses)
  },

  async getUserCreditCards({commit}) {
    const { data:credit_cards } = await this.$axios.get(`/api/user/card`)
    commit(USER_MUTATIONS.SET_CREDIT_CARDS, credit_cards)
  },



  // POST ACTION
  async createAddress({commit}, request) {
    const { data:address } = await this.$axios.post('/api/user/address',request)
    commit(USER_MUTATIONS.CREATE_ADDRESS, address)
  },

  async createCreditCard({commit}, request) {
    const { data:credit_card } = await this.$axios.post('/api/user/card',request)
    commit(USER_MUTATIONS.CREATE_CREDIT_CARD, credit_card)
  },


  // UPDATE ACTION
  async updateAddress({commit,_, id}, request) {
    const { data:address } = await this.$axios.put(`/api/address/${id}`,request)
    commit(USER_MUTATIONS.UPDATE_ADDRESS, address)

  },


  // DELETE ACTION
  async removeAdress({commit}, itemId) {
    await this.$axios.delete(`/api/user/address/${itemId}`)
    commit(USER_MUTATIONS.REMOVE_ADDRESS, itemId)
  },
  async removeCreditCard({commit}, itemId) {
    await this.$axios.delete(`/api/user/card/${itemId}`)
    commit(USER_MUTATIONS.REMOVE_CREDIT_CARD, itemId)
  }


}

export const getters = {
  // determine if the user is authenticated based on the presence of the access token
  addresses: (state) => {
    return state.addresses
  },
  credit_cards: (state) => {
    return state.credit_cards
  },
  address: (state) => (itemId) =>  {
    return state.addresses.filter((address) => address.id === itemId)
  }

}
