<template>
  <h1>组件的生命周期 --- {{text}}</h1>
  <button @click="changeText">更新text</button>
</template>

<script>
import { defineComponent, onBeforeMount, onMounted, ref, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
export default defineComponent({
  setup() {
    const text = ref('hello')
    function changeText() {
      text.value = Math.random();
    }
    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
    return {
      text,
      changeText
    }
  }
})
</script>
