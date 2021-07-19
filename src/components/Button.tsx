import { defineComponent } from 'vue'

export default defineComponent({
  setup(_, { slots }) {
    return () => {
      return <button>{slots}</button>
    }
  }
})
