import { defineComponent } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    return () => {
      return (
        <div id="app">
          <h1>Four Forces</h1>
          <p>
            <RouterLink to="/">Go to Home</RouterLink>
            <RouterLink to="/login">Go to Login</RouterLink>
          </p>
          <RouterView />
        </div>
      )
    }
  }
})
