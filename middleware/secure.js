export default function ({ redirect, store }) {
    if ((Object.keys(store.state.auth.user).length === 0)) {
      return redirect('/auth/login')
    }
  }
