export default function ({ store, app: { $axios, localePath }, redirect }) {
  const IGNORED_PATHS = ['/']

  $axios.onRequest((config) => {
    // check if the user is authenticated
    if (store.state.auth.token && store.state.auth.token !== '') {
      config.headers['Token'] = store.state.auth.token
    }

    return config
  })

  $axios.onError((error) => {
    return new Promise(async (resolve, reject) => {
      // ignore certain paths (i.e. paths relating to authentication)
      const isIgnored = IGNORED_PATHS.some(path => error.config.url.includes(path))

      // get the status code from the response
      const statusCode = error.response ? error.response.status : -1

      // only handle authentication errors or errors involving the validity of the token
      if ((statusCode === 401 || statusCode === 422) && !isIgnored) {// catch any other JWT-related error (i.e. malformed token) and logout the user
        await store.dispatch('auth/logout')

        // redirect to the home
        return redirect('/')
      }

      // ignore all other errors, let component or other error handlers handle them
      return reject(error)
    })
  })
}
