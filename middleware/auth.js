export default function ({ store, redirect, app: {} }) {
    // If the user is not authenticated
    let isLoggedIn = store.state.auth.token && store.state.auth.token != ''
    if (!isLoggedIn) {
      console.error("Unauthenticated 401!")
      return redirect('/login')
    }
  }
