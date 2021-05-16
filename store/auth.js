// reusable aliases for mutations
export const AUTH_MUTATIONS = {
  SET_USER: 'SET_USER',
  SET_TOKEN: 'SET_TOKEN',
  LOGOUT: 'LOGOUT',
}

export const state = () => ({
  token: null, // JWT access token
  user: null, // user object
})

export const mutations = {
  // store the logged in user in the state
  [AUTH_MUTATIONS.SET_USER](state, user) {
    state.user = user
  },

  // store new or updated token fields in the state
  [AUTH_MUTATIONS.SET_TOKEN](state, token) {
    state.token = token
  },

  // clear our the state, essentially logging out the user
  [AUTH_MUTATIONS.LOGOUT](state) {
    state.user = null
    state.token = null
  },
}

export const actions = {
  async login({ commit, dispatch }, { userName, password, platform, minRole }) {
    // make an API call to login the user with an email address and password
    const { data: { user, token } } = await this.$axios.post(
      '/api/login',
      { userName, password, platform, minRole }
    )

    // commit the user and tokens to the state
    commit(AUTH_MUTATIONS.SET_USER, user)
    commit(AUTH_MUTATIONS.SET_TOKEN, token)
  },

  async register({ commit }, request) {
    // make an API call to register the user
    const { data: { user, payload } } = await this.$axios.post(
      '/api/user/register',
      request
    )

    // commit the user and tokens to the state
    commit(AUTH_MUTATIONS.SET_USER, user)
    commit(AUTH_MUTATIONS.SET_TOKEN, payload)
  },

  async me({ commit, dispatch }) {
    const { data } = await this.$axios.get('/api/me')
    //console.log(data)
    // commit the user to the state
    commit(AUTH_MUTATIONS.SET_USER, data)
  },

  async updateUserInfo({commit}, request) {
    const { data:user } = await this.$axios.put(`/api/user`,request)
    commit(AUTH_MUTATIONS.SET_USER, user)

  },

  // logout the user
  logout({ commit, state }) {
    commit(AUTH_MUTATIONS.LOGOUT)
  },
}

export const getters = {
  // determine if the user is authenticated based on the presence of the access token
  isAuthenticated: (state) => {
    //return state.token && state.token !== ''
    return false
  },
  user: (state) => {
    return state.user
  },
}
