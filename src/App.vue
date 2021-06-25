<template>
  <h1>Hello <span class="blue">{{ name }}</span></h1>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
  setup() {
    return {
      name: 'world'
    }
  }
})
</script>

<style scoped>
.blue {
  color: blue;
}
</style>
