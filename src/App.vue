<template>
  <h1>
    Hello <span class="aaa">{{ name }}</span>
  </h1>
</template>

<script>
import { defineComponent } from '../vue';
export default defineComponent({
  props: {
    name: {
      type: String,
      default: "world"
    }
  }
})
</script>

<style scoped>
.aaa {
  color: blue;
}
</style>