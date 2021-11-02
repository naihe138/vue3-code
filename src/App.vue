<template>
  <!-- <Lefecycle v-if="state.show" /> -->
  <button @click="toShow">卸载组件</button>
</template>

<script>
import { defineComponent, reactive } from 'vue';
// import Lefecycle from './lifecycle.vue';
export default defineComponent({
  // components: {
  //   Lefecycle,
  // },
  setup() {
    const state = reactive({
      show: true
    })
    const toShow = () => {
      debugger
      state.show = !state.show;
    }
    return {
      state,
      toShow
    }
  }
})
</script>

<style scoped>
.blue {
  color: blue;
}
</style>
