import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  name: 'Home',
  setup() {
    return () => {
      return (
        <div>
          <h1>Home</h1>
          <ElButton>click</ElButton>
        </div>
      )
    }
  }
})
