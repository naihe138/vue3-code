<template>
  <button @click="handleClick">点击事件</button>
</template>

<script>
export default {
  setup() {
    const handleClick = () => {
      console.log('click event');
    }
    return { handleClick }
  }
}
</script>
